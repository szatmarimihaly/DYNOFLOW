'use client';
import { useState } from 'react';
import { supabase } from '@/lib/supabase';
import { useRouter } from 'next/navigation';
import Image from 'next/image';

export default function LoginForm() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const router = useRouter();

  const handleLogin = async () => {
    const { error, data } = await supabase.auth.signInWithPassword({ email, password });
    if (error) {
      alert(error.message);
      console.error(error);
    } else {
      console.log('Logged in:', data);
      console.log('Redirecting to /admin...');
      router.push('/admin');
      console.log('Redirect done');
    }
  };
  

  return (
    <div className='flex flex-col items-center justify-center gap-6 bg-white mx-auto max-w-3xl mt-10 p-10'>
      
      
      
      <input 
        type="email" 
        value={email} 
        onChange={e => setEmail(e.target.value)} 
        placeholder="Email" 
        className='loginput'/>

      <input type="password" 
        value={password} 
        onChange={e => setPassword(e.target.value)} 
        placeholder="Password" 
        className='loginput'/>

      <button onClick={handleLogin} className='mt-6 bg-black text-white px-4 py-2 rounded-xl'>Login</button>
    </div>
  );
}