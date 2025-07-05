import React from 'react'
import CartTitle from '../components/cartComponent/CartTitle'
import CartList from '../components/cartComponent/CartList'
import CartSummary from '../components/cartComponent/CartSummary'
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
      <CartSummary />
    </main>
  )
}

export default CartPage