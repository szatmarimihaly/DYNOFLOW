// app/api/create-checkout-session/route.ts
import { NextResponse } from 'next/server'
import stripe from '@/lib/stripe'
import { supabase } from '@/lib/supabase'  
import { v4 as uuidv4 } from 'uuid'

export async function POST(req: Request) {
  try {
    const body = await req.json()
    const { customerData, cartItems } = body

    // 1. Új rendelés beszúrása Supabase-be
    const orderId = uuidv4()
    const { data: order, error: orderError } = await supabase
      .from('orders')
      .insert([
        {
          id: orderId,
          email: customerData.email,
          full_name: customerData.fullName,
          phone: customerData.tel,
          city: customerData.city,
          postal_code: customerData.postalCode,
          adress: customerData.address,
          address_num: customerData.addressNum,
          adress_alphabet: customerData.addressAlphabet,
          status: 'pending',
        },
      ])
      .select()
      .single()

    if (orderError) throw orderError

    // 2. Termékek mentése az order_items táblába
    const itemsToInsert = cartItems.map((item: any) => ({
      order_id: orderId,
      product_name: item.name,
      quantity: item.quantity,
      price: item.price,
    }))

    const { error: itemError } = await supabase
      .from('order_items')
      .insert(itemsToInsert)

    if (itemError) throw itemError

    // 3. Stripe session létrehozása
    const stripeSession = await stripe.checkout.sessions.create({
      payment_method_types: ['card'],
      mode: 'payment',
      currency: 'eur',
      success_url: `${process.env.NEXT_PUBLIC_SITE_URL}/success?session_id={CHECKOUT_SESSION_ID}`,
      cancel_url: `${process.env.NEXT_PUBLIC_SITE_URL}/cancel`,
      metadata: {
        order_id: orderId,
      },
      line_items: cartItems.map((item: any) => ({
        price_data: {
          currency: 'eur',
          product_data: {
            name: item.name,
          },
          unit_amount: item.price * 100, // EUR-ban centben
        },
        quantity: item.quantity,
      })),
    })

    // 4. Stripe ID mentése az order rekordba
    await supabase
      .from('orders')
      .update({ stripe_id: stripeSession.id })
      .eq('id', orderId)

    return NextResponse.json({ url: stripeSession.url })
  } catch (err: any) {
    console.error('Stripe session error:', err)
    return new NextResponse('Hiba történt a fizetés indításakor', { status: 500 })
  }
}
