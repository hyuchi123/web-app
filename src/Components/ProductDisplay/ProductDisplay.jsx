import React from 'react'
import { useState } from 'react'
import './ProductDisplay.css'

/*
export const ProductDisplay = (props) => {
    //const {product} = props
  return (
    <div className='productdisplay'>
        <div className='product_image'>
            <img className='productdisplay_image' src={product.image} alt='' />
        </div>

        <div className="product_info">
            <h1>{product.name}</h1>
            <p>{product.price}</p>
            <p>{product.description}</p>
        </div>
    </div>
  )
}
*/

export const ProductDisplay = ({ product }) => {
  const [quantity, setQuantity] = useState(1)
  const [cart, setCart] = useState([])

  const handleQuantityChange = (event) => {
    setQuantity(Number(event.target.value))
  }

  const handleAddToCart = () => {
    setCart([...cart, { ...product, quantity }])
  }


  return (
    <div className='productdisplay'>
      <div className='product_image'>
        <img className='productdisplay_image' src={product.image} alt='' />
      </div>

      <div className="product_info">
        <h1>{product.name}</h1>
        <div className="price">${product.price}</div>
        <p>{product.description}</p>
      

      
      <label htmlFor="quantity">數量:</label>
        <select id="quantity" value={quantity} onChange={handleQuantityChange}>
          <option value="1">1</option>
          <option value="2">2</option>
          <option value="3">3</option>
          <option value="4">4</option>
          <option value="5">5</option>
          {/* 下拉式選單可加更多選項 */}
        </select>
      
     
        <button onClick={handleAddToCart}>加入購物車</button>
      </div>
        
    </div>
  )
}