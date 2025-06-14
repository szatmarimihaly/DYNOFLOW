'use client'
import React from 'react'
import { useTranslation } from 'react-i18next'



const ModelError = () => {
  
    const { t } = useTranslation();

    return (
    <div className='text-2xl text-red-600'>{t('model_error')}</div>
  )
}

export default ModelError