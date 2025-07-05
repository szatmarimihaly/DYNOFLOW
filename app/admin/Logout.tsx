'use client'
import React from 'react'
import { supabase } from '@/lib/supabase'
import { useRouter } from 'next/navigation'

const Logout = () => {
  
    const router = useRouter();

    const handleLogout = async() => {
        const { error } = await supabase.auth.signOut();

        if(error){
            alert('Hiba a kijelentkezés során: ')
            return;
        }
        router.push('/login');
    }
  
  
    return (
    <div className='flex justify-end mx-10'>
        <button onClick={handleLogout}className="px-4 py-2 bg-red-600 text-white rounded hover:bg-red-700 w-full max-w-24 mt-6 ">
            Kilépés
        </button>
    </div>
  )
}

export default Logout