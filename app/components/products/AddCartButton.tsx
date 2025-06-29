'use client'

import React from 'react'
import { useTranslation } from 'react-i18next'
import AddShoppingCartOutlinedIcon from '@mui/icons-material/AddShoppingCartOutlined';
import { useCartStore } from '../context/cart-store';

type Props = {
  product: {
    id: number;
    name: string;
    slug: string;
    price: number;
  };
};

const AddCartButton = ({ product } : Props) => {

    const { t } = useTranslation();
    const addToCart = useCartStore((state) => state.addToCart);

    const handleAdd = () => {
      addToCart({
        id: product.id,
        name: product.name,
        slug: product.slug,
        price: product.price,
      })
    }

  return (
    <button className='bg-blue-300 flex items-center gap-2 font-medium text-lg p-4 rounded-xl' onClick={handleAdd}>{t('cart_button')} <AddShoppingCartOutlinedIcon/></button>
  )
}

export default AddCartButton