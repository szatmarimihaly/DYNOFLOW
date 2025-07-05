'use client'
import React from 'react'
import { useCartStore } from '../context/cart-store'
import Link from 'next/link'
import { useTranslation } from 'react-i18next'

const CartSummary = () => {

    const { t } = useTranslation();
    const items = useCartStore((state) => state.items);

    const total = items.reduce((acc, items) => acc + items.price * items.quantity, 0);

    if(items.length === 0) return null;

  return (
    <div className='mt-10 flex items-center justify-between w-full max-w-3xl mx-auto'>
        <h3 className='text-xl font-bold mb-2'>{t('total')} <span className='font-medium'>{total.toFixed(2)}€</span></h3>

        <Link href='/checkout'>
            <button className='bg-black text-white px-4 py-2 rounded-xl hover:bg-gray-950/80 transition-all duration-300'>
                {t('checkout')}
            </button>
        </Link>
    </div>
  )
}

export default CartSummary