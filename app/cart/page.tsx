import React from 'react'
import CartTitle from '../components/cartComponent/CartTitle'
import CartList from '../components/cartComponent/CartList'
import { Metadata } from 'next'  

export const metadata = {
  title : 'DYNOFLOW | CART',
  description : 'Review your selected products',
}

const CartPage = () => {

  return (
    <main className='p-6'>
      <CartTitle />
      <CartList />
    </main>
  )
}

export default CartPage