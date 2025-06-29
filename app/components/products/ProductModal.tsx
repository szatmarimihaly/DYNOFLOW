'use client'
import React, { useState } from 'react'
import { Dialog, DialogTitle, DialogContent, DialogActions, Button } from '@mui/material'
import Image from 'next/image'
import AddCartButton from './AddCartButton'
import CancelOutlinedIcon from '@mui/icons-material/CancelOutlined';
import { useTranslation } from 'react-i18next'

type Product = {
    id: number;
    name: string;
    slug: string;
    price: number;
    category?: string;
};

const ProductModal = ({ product }: { product : Product }) => {

    const [open, setOpen] = useState(false);
    const handleClose = () => setOpen(false);
    const { t } = useTranslation();

  return (
    <>
        <Button variant='outlined' onClick={() => setOpen(true)}>
            {t('view_product')}
        </Button>

        <Dialog open={open} onClose={handleClose} maxWidth='sm' fullWidth>
            <DialogTitle>{product.name}</DialogTitle>
            <DialogContent dividers>
                <Image src={`/products/${product.slug}.webp`} alt={product.name} width={400} height={250} style={{ objectFit: 'cover', width: '100%', height: 'auto', borderRadius: '12px' }}/>
                <div className='flex items-center justify-between mt-4 mb-4'>
                    <p className='font-bold text-2xl'>{product.price.toFixed(2)}€</p>
                    <AddCartButton product={product}/>
                </div>
            </DialogContent>
            <Button onClick={handleClose}><CancelOutlinedIcon fontSize='large'/></Button>
        </Dialog>

    </>
  )
}

export default ProductModal