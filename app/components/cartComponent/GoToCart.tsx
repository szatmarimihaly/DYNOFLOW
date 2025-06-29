import React from 'react'
import ShoppingBagOutlinedIcon from '@mui/icons-material/ShoppingBagOutlined';
import IconButton from '@mui/material/IconButton'
import Badge from '@mui/material/Badge'
import Link from 'next/link'
import { useCartStore } from '../context/cart-store';

const GoToCart = () => {

  const itemCount = useCartStore((state) => state.getItemCount());


  return (
    <Link href="/cart">
        <IconButton>
            <Badge badgeContent={itemCount} color="primary">
                <ShoppingBagOutlinedIcon fontSize="large" />
            </Badge>
        </IconButton>
    </Link>
  )
}

export default GoToCart