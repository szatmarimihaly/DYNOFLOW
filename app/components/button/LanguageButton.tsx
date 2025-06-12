'use client'

import React from 'react'
import i18n from '@/i18n'
import { useTranslation } from 'react-i18next'

const LanguageButton = () => {

    const { t } = useTranslation();
    const toogleLanguage = () => {
        const newLang = i18n.language === 'hu' ? 'en' : 'hu';
        i18n.changeLanguage(newLang);
    }

  return (
    <button className='bg-[#33bcdd] transition-all duration-200 p-2 rounded-md mb-2 px-4 font-bold' onClick={toogleLanguage}>{t('button_change')}</button>
  )
}

export default LanguageButton