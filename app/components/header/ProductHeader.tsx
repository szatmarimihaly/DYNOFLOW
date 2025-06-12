"use client"
import React from 'react'
import { useTranslation } from 'react-i18next'

const ProductHeader = () => {

    const { t } = useTranslation();

  return (
    <h1 className='text-center mt-10 text-3xl font-medium'>{t('product_header')}</h1>
  )
}

export default ProductHeader