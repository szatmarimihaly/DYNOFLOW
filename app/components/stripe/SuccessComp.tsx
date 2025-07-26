'use client'
import React from 'react'
import TaskAltOutlinedIcon from '@mui/icons-material/TaskAltOutlined';
import { useTranslation } from 'react-i18next';
import Link from 'next/link';



const SuccessComp = () => {

    const { t } = useTranslation();

  return (

    <div className='flex flex-col items-center'>
        <div className='flex items-center justify-center mt-30 gap-2'>
            <TaskAltOutlinedIcon fontSize='large' color='success'/>
            <h3 className='stripe-header'>{t('success_message')}</h3>
        </div>

        <Link href='/' className='mt-10 bg-black text-white py-2 px-4'>{t('back_to')}</Link>
    </div>
    

    
  )
}

export default SuccessComp