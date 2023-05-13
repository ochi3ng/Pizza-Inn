import React, { useState, useEffect } from 'react';
import Products from './Products';
import '../styles/Ourservices.css'
export type Props = {
  title: string;
  description: string;
  price: number;
  image: string
}
const OurProducts = () => {
  const [product, setProduct] = useState<Props[]>([])

  useEffect(() => {
    fetch('https://fakestoreapi.com/products')
      .then(Response => Response.json())
      .then(data => setProduct(data))
  })
  return (
    <div>
            <h1 className='service-title'>Welcome to our shop</h1>
      <div className='services-details'>

        {product.map(item => <Products title={item.title}
          description={item.description} price={item.price} image={item.image} />)}

      </div>
    </div>
   
  )
};

export default OurProducts;
