'use client'

import React from 'react'
import { useTranslation } from 'react-i18next'
import AddShoppingCartOutlinedIcon from '@mui/icons-material/AddShoppingCartOutlined';
import { useCartStore } from '../context/cart-store';
import { useState } from 'react';
import CheckOutlinedIcon from '@mui/icons-material/CheckOutlined';

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

    const [added, setAdded] = useState(false);

    const handleAdd = () => {
      addToCart({
        id: product.id,
        name: product.name,
        slug: product.slug,
        price: product.price,
      })

      setAdded(true);
      setTimeout(() => setAdded(false), 2500);

    }

  return (

    <>
      <button className='border-1 flex items-center gap-2 font-medium text-lg p-2 rounded-xl hover:cursor-pointer' onClick={handleAdd}>{t('cart_button')} <AddShoppingCartOutlinedIcon/>
      </button>

      {added && (
        <span><CheckOutlinedIcon fontSize='medium' color='success'/></span>
      )}

    </>

    
  )
}

export default AddCartButton