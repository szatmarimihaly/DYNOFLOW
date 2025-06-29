import React from 'react'
import ShoppingBagOutlinedIcon from '@mui/icons-material/ShoppingBagOutlined';
import IconButton from '@mui/material/IconButton'
import Badge from '@mui/material/Badge'
import Link from 'next/link'

const GoToCart = () => {
  return (
    <Link href="/cart">
        <IconButton>
            <Badge badgeContent={2} color="primary">
                <ShoppingBagOutlinedIcon fontSize="large" />
            </Badge>
        </IconButton>
    </Link>
  )
}

export default GoToCart