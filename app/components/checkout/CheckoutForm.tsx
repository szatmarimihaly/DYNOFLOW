'use client'
import React from 'react'
import { useState } from 'react'
import { useCartStore } from '../context/cart-store'  
import { useTranslation } from 'react-i18next'

const CheckoutForm = () => {

    const { t } = useTranslation();

    const [formData, setFormData] = useState( {
        name: '',
        fullName: '',
        city: '',
        postalCode: '',
        address: '',
        adressNum: '',
        addressAlphabet: '',
        phone: '',
    })

    const [loading, setLoading] = useState(false);
    const cartItems = useCartStore((state) => state.items);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setFormData({ ...formData, [e.target.name]: e.target.value })
    }

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault()
        setLoading(true)

    const res = await fetch('/api/create-checkout-session', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        customerData: formData,
        cartItems,
      }),
    })

    const data = await res.json()
    if (data.url) {
      window.location.href = data.url
    }
    setLoading(false)
  }

  return (
    <div className='flex justify-center'>
        <form onSubmit={handleSubmit} className="max-w-xl min-w-sm space-y-4 bg-white px-6 py-10 mt-10 flex flex-col items-center rounded-xl">
            <h4 className='text-3xl mb-4 font-bold'>{t('payment')}</h4>

            <input name="fullName" placeholder={t('checkout_name')} onChange={handleChange} required className="checkoutform" />
            <input name="email" placeholder="Email" onChange={handleChange} required className="checkoutform" />
            <input name="tel" placeholder={t('checkout_phone')} onChange={handleChange} required className="checkoutform" />
            <input name="city" placeholder={t('checkout_city')} onChange={handleChange} required className="checkoutform" />
            <input name="postalCode" placeholder={t('checkout_postal')} onChange={handleChange} required className="checkoutform" />
            <input name="address" placeholder={t('checkout_street')} onChange={handleChange} required className="checkoutform" />
            <input name="addressNum" placeholder={t('checkout_address')}onChange={handleChange} required className="checkoutform" />
            <input name="addressAlphabet" placeholder={t('checkout_door')} onChange={handleChange} className="checkoutform" />
            
            <button
                type="submit"
                disabled={loading}
                className="bg-black text-white px-4 py-2 rounded items-center mt-4 w-full"
            >
                {loading ? t('checkout_active') : t('checkout') }
            </button>
        </form>
    </div>
  )
}

export default CheckoutForm