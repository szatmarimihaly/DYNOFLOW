'use client'

import React from 'react'
import { useTranslation } from 'react-i18next'
import AddShoppingCartOutlinedIcon from '@mui/icons-material/AddShoppingCartOutlined';


const AddCartButton = () => {

    const { t } = useTranslation();

  return (
    <button className='bg-blue-300 flex items-center gap-2 font-medium text-lg p-4 rounded-xl'>{t('cart_button')} <AddShoppingCartOutlinedIcon/></button>
  )
}

export default AddCartButton