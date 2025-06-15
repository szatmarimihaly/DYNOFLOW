'use client'
import React from 'react'
import Image from 'next/image'
import AddCartButton from './AddCartButton'

type Product = {
  id: number;
  name: string;
  slug: string;
  price: number;
}

const ProductCard = ({ product } : { product : Product }) => {
  return (
    <div className='bg-white p-4 rounded-xl shadow-xl flex flex-col items-center gap-4'>
      <Image 
        src={`/products/${product.slug}.webp`}
        alt={product.name}
        width={300}
        height={300}
        style={{ objectFit: 'cover' }}
        sizes="(max-width: 768px) 100vw, 300px"
      />

      <h3 className='text-xl font-semibold'>{product.name}</h3>
      <div className='flex items-center justify-between w-full'>
        <p className='text-xl text-gray-700'>{product.price} EUR</p>
        <AddCartButton />
      </div>
    </div>
  )
}

export default ProductCard