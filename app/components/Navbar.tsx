"use client"
import '@/i18n'
import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import MenuOutlinedIcon from '@mui/icons-material/MenuOutlined';
import CloseOutlinedIcon from '@mui/icons-material/CloseOutlined';
import { useTranslation } from "react-i18next";
import LanguageButton from './button/LanguageButton';
import GoToCart from '../cart/GoToCart';

const Navbar = () => {

    const [isOpen, setIsOpen] = useState(false);
    const { t } = useTranslation();

  return (
    <nav className="w-full bg-white shadow-lg flex flex-col">
        <div className="p-4 flex items-center justify-between">
            <button onClick={() => setIsOpen(!isOpen)}>
                {isOpen ? <CloseOutlinedIcon fontSize="large"/> : <MenuOutlinedIcon fontSize="large"/>}
            </button>

            <Image
                src={"/dynoflow1.png"}
                alt="DynoFlow Logo"
                width={200}
                height={50}
            />

            <GoToCart />

        </div>

        {isOpen && (
                <div className='flex flex-col items-center gap-4 w-full'>
                    <Link href="/products" onClick={() => setIsOpen(false)} className='link'>
                        {t('products')}
                    </Link>

                    <Link href="/contact" onClick={() => setIsOpen(false)} className='link'>
                        {t('contact')}
                    </Link>
                    <LanguageButton />
                </div>
        )}
    </nav>
  );
};
export default Navbar;
