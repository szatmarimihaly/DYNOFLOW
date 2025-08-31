// app/api/webhook/route.ts
import { NextRequest, NextResponse } from 'next/server'
import Stripe from 'stripe'
import { supabase } from '@/lib/supabase'
import { Resend } from 'resend'

export const config = {
  api: {
    bodyParser: false,
  },
}

const resend = new Resend(process.env.RESEND_API_KEY)

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!, {
    apiVersion: '2025-06-30.basil'
})

export async function POST(req: NextRequest) {
  const rawBody = await req.text()
  const sig = req.headers.get('stripe-signature')!

  let event: Stripe.Event

  try {
    event = stripe.webhooks.constructEvent(
      rawBody,
      sig,
      process.env.STRIPE_WEBHOOK_SECRET!
    )
  } catch (err: any) {
    console.error('Webhook signature verification failed.', err.message)
    return new NextResponse(`Webhook Error: ${err.message}`, { status: 400 })
  }

  if (event.type === 'checkout.session.completed') {
    const session = event.data.object as Stripe.Checkout.Session

    const customerData = JSON.parse(session.metadata?.customerData || '{}')
    const cartItems = JSON.parse(session.metadata?.cartItems || '[]')

    // 1. Új rendelés beszúrása Supabase-be
    const { data: order, error: orderError } = await supabase
      .from('orders')
      .insert([
        {
          stripe_id: session.id,
          email: customerData.email,
          full_name: customerData.fullName,
          phone: customerData.tel,
          city: customerData.city,
          postal_code: customerData.postalCode,
          adress: customerData.address,
          address_num: customerData.addressNum,
          adress_alphabet: customerData.addressAlphabet,
          status: 'paid',
        },
      ])
      .select()
      .single()

    if (orderError) {
      console.error('Order insert error:', orderError)
      return new NextResponse('Order insert failed', { status: 500 })
    }

    // 2. Termékek beszúrása
    const itemsToInsert = cartItems.map((item: any) => ({
      order_id: order.id,
      product_name: item.name,
      quantity: item.quantity,
      price: item.price,
    }))

    const { error: itemError } = await supabase
      .from('order_items')
      .insert(itemsToInsert)

    if (itemError) {
      console.error('Order items insert error:', itemError)
    }

    //Resend email here

    try {
      const result = await resend.emails.send({
        from: 'Acme <onboarding@resend.dev>', // FIX
        to: customerData.email,
        subject: `Order Confirmation`,
        html: `
          <h2>Thank you for your order, ${customerData.fullName}!🎉</h2>
          <img src="/dynoflow.webp width={100} height={100}"/>
          <p><b>Order ID:</b> ${order.id}</p>
          <p><b>Email:</b> ${customerData.email}</p>
          <p><b>Phone:</b> ${customerData.tel}</p>
          <p><b>Address:</b> ${customerData.postalCode} ${customerData.city}, 
              ${customerData.address} ${customerData.addressNum}
              ${customerData.addressAlphabet ? '/' + customerData.addressAlphabet : ''}</p>
          
          <h3>Ordered Products:🛒</h3>
          <ul>
            ${cartItems.map((item: any) => `<li>${item.quantity} × ${item.name} – 💶${item.price}EUR</li>`).join('')}
          </ul>
          
          <p><b>Payment status:</b> ✅ Successful</p>
          <p>We will contact you soon regarding shipping.</p>
        `,
      })

      console.log("Resend result:", result)
    } catch (emailErr) {
      console.error('Email sending error:', emailErr)
    }




  }

  return NextResponse.json({ received: true })
}
