import React from 'react'

const ProductPage = ({ params } : { params: {slug : string} }) => {

    const { slug } = params;
  return (
    <div>page</div>
  )
}

export default ProductPage;