import React from 'react'

import { Metadata } from "next";
import BrandList from '../components/brand/BrandList';
import ProductHeader from '../components/header/ProductHeader';

export const metadata: Metadata = {
  title: "DYNOFLOW | BRANDS",
  description: "Explore premium car brands offered by DYNOFLOW. Carbon fiber accessories, exhaust systems, and performance tuning parts for every vehicle type.",
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