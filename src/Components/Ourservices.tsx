import React, { useState, useEffect } from 'react';
import Products from './Products';
import '../styles/Ourservices.css'

export type CartItemType = {
  id:any;
  item:number;
  title: string;
  description: string;
  price: number;
  image: string;
  amount:number
  handleAddToCart: (clickedItem: CartItemType) => void;
}

const OurProducts = () => {
  const [cartItems, setCartItems] = useState([] as CartItemType[])
  const [product, setProduct] = useState<CartItemType[]>([])
  async function FetchData() {
    const Response = await fetch('https://fakestoreapi.com/products')
    const json = await Response.json();
    setProduct(json);
  }
 
  useEffect(() => {
    FetchData()
  }, [])
  const handleAddToCart = (clickedItem: CartItemType) => {
    setCartItems(prev => {
      const isItemInCart = prev.find(item => item.id === clickedItem.id);


      if (isItemInCart) {
        return prev.map(item =>
          item.id === clickedItem.id
            ? { ...item, amount: item.amount + 1 }
            : item
        );
      }
      return [...prev, { ...clickedItem, amount: 1 }]
    })
  };
  return (
    <div className='service'>
      <h1 className='service-title'>Welcome to our shop</h1>
      <div className='services-details'>
        {product.map(item => <Products title={item.title}
          description={item.description} price={item.price} image={item.image}
          handleAddToCart={item.handleAddToCart}
          item={item}/>)}

      </div>
    </div>

  )
};

export default OurProducts;
