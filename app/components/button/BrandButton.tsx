"use client"

import Link from 'next/link';
import React from 'react'
import { useTranslation } from 'react-i18next';

type Props = {
    slug: string
}

const BrandButton = ({ slug }: Props) => {

    const { t } = useTranslation();
  
    return (
    <div className='flex justify-end w-full'>
        <Link href={`/products/${slug}`} 
        className='p-2 bg-[#ace9f5] rounded-xl items-end'>
            {t('brand_button')}
        </Link>
    </div>
  )
}

export default BrandButton