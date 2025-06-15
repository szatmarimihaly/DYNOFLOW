"use client"

import Link from 'next/link';
import React from 'react'
import { useTranslation } from 'react-i18next';
import ArrowForwardIosOutlinedIcon from '@mui/icons-material/ArrowForwardIosOutlined';

type Props = {
    slug: string
}

const BrandButton = ({ slug }: Props) => {

    const { t } = useTranslation();
  
    return (
    <div className='flex justify-end w-full'>
        <Link href={`/products/${slug}`} 
        className='p-2 bg-black text-white rounded-xl flex items-center'>
            {t('brand_button')}<ArrowForwardIosOutlinedIcon fontSize='small'/>
        </Link>
    </div>
  )
}

export default BrandButton