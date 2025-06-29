'use client'
import React from 'react'
import { useCartStore } from '../context/cart-store'
import CartItem from './CartItem'
import { useTranslation } from 'react-i18next'

const CartList = () => {

    const { t } = useTranslation();
    const cart = useCartStore((state) => state.items);

    if (cart.length === 0) {
        return <p className='text-center mt-10 text-gray-700'>{t('empty')}</p>
    }

  return (
    <div className='max-w-3xl mx-auto mt-10'>
        {cart.map(product => (
            <CartItem key={product.id} {...product}/>
        ))}
    </div>



  )
}

export default CartList