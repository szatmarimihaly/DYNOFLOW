'use client'
import React from 'react'
import { useCartStore } from '../context/cart-store'
import Image from 'next/image'
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline'

type CartItemProps = {
    id: number;
    name: string;
    slug: string;
    price: number;
}

const CartItem = ({ id, name, slug, price } : CartItemProps) => {
  
    const removeFromCart = useCartStore((state) => state.removeFromCart);

    return (
        <div className="flex items-center gap-4 p-4 border-b">
            <Image src={`/products/${slug}.webp`} alt={name} width={100} height={100} />
            <div className="flex-1">
                <h2 className="font-semibold text-md lg:text-lg">{name}</h2>
                <p className="text-gray-600">{price.toFixed(2)} €</p>
            </div>
            <button onClick={() => removeFromCart(id)} className="text-red-600 hover:text-red-800">
                <DeleteOutlineIcon fontSize='large'/>
            </button>
        </div>
    )
}

export default CartItem