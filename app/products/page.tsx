import React from 'react'

import { Metadata } from "next";
import BrandList from '../components/brand/BrandList';
import ProductHeader from '../components/header/ProductHeader';

export const metadata: Metadata = {
  title: "DYNOFLOW | PRODUCTS",
  description: "Webshop selling carbon products, exhaust systems and accessories for cars",
};

const Products = () => {
  return (
    <>

    
      <header>
        <ProductHeader />
      </header>

      <section>
        <BrandList />
      </section>

    </>
    
  )
}

export default Products