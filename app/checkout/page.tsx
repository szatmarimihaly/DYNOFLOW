import React from 'react'
import CheckoutForm from '../components/checkout/CheckoutForm'
import { Metadata } from 'next'

export const metadata:Metadata = {
        title: 'DYNOFLOW | CHECKOUT',
        description: 'Add meg a rendeléshez szükséges adatokat',
    }

const Page = () => {

  return (
    <main className='flex flex-col items-center'>
        <CheckoutForm />
    </main>
  )
}

export default Page