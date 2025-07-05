'use client'
import React from 'react'
import { useCartStore } from '../context/cart-store'
import Image from 'next/image'
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline'
import AddIcon from '@mui/icons-material/Add'
import RemoveIcon from '@mui/icons-material/Remove'

type CartItemProps = {
    id: number;
    name: string;
    slug: string;
    price: number;
    quantity: number;
}

const CartItem = ({ id, name, slug, price, quantity } : CartItemProps) => {
  
    const removeFromCart = useCartStore((state) => state.removeFromCart);
    const updateQuantity = useCartStore((state) => state.updateQuantity);

    const handleDecrease = () => {
        if(quantity > 1) {
            updateQuantity(id, quantity - 1);
        }
    }

    const handleIncrease = () => {
        updateQuantity(id, quantity + 1);
    }

    return (
        <div className="flex items-center gap-4 p-4 border-b">
            <Image src={`/products/${slug}.webp`} alt={name} width={100} height={100} />
            <div className="flex-1">
                <h2 className="font-semibold text-md lg:text-lg">{name}</h2>
                <p className="text-gray-600">{price.toFixed(2)} €</p>
            </div>

            {/* Quantity button */}
            <div className="flex items-center gap-2 mt-2">
                    <button
                        onClick={handleDecrease}
                        className={`p-1 rounded-full ${quantity <= 1 ? 'text-gray-400 cursor-not-allowed' : 'text-black hover:text-red-600'}`}
                        disabled={quantity <= 1}
                    >
                        <RemoveIcon />
                    </button>
                    <span className="px-3 font-semibold">{quantity}</span>
                    <button onClick={handleIncrease} className="p-1 rounded-full text-black hover:text-green-600">
                        <AddIcon />
                    </button>
                </div>
            {/* Quantity button */}

            <button onClick={() => removeFromCart(id)} className="text-red-600 hover:text-red-800">
                <DeleteOutlineIcon fontSize='large'/>
            </button>
        </div>
    )
}

export default CartItem