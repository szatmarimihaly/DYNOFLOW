'use client'
import React from 'react'
import Link from 'next/link';
import ErrorOutlineOutlinedIcon from '@mui/icons-material/ErrorOutlineOutlined';
import { useTranslation } from 'react-i18next';

const CanceComp = () => {
  const { t } = useTranslation();

  return (

    <div className='flex flex-col items-center'>
        <div className='flex items-center justify-center mt-30 gap-2'>
            <ErrorOutlineOutlinedIcon fontSize='large' color='error'/>
            <h3 className='stripe-header'>{t('cancel_message')}</h3>
        </div>

        <Link href='/' className='mt-10 bg-black text-white py-2 px-4'>{t('back_to')}</Link>
    </div>
    

    
  )
}

export default CanceComp