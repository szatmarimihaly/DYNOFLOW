'use client'
import React from 'react'
import { useTranslation } from 'react-i18next';

const CartTitle = () => {
  
    const { t } = useTranslation();
  
    return (
        <h1 className='text-3xl font-medium mt-4'>{t('cart_h1')}</h1>
  )
}

export default CartTitle