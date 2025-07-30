// app/api/webhook/route.ts
import { NextRequest, NextResponse } from 'next/server'
import Stripe from 'stripe'
import { supabase } from '@/lib/supabase'

export const config = {
  api: {
    bodyParser: false,
  },
}

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
  }

  return NextResponse.json({ received: true })
}
