import React from 'react'
import { useState } from 'react'
import './ProductDisplay.css'


export const ProductDisplay = (props) => {
    const {product} = props
    const [quantity, setQuantity] = useState(1)
    const [cart, setCart] = useState([])
    const [isLoggedIn, setIsLoggedIn] = useState(false) // 新增登入狀態
    const [message, setMessage] = useState('') // 新增訊息狀態

    const handleQuantityChange = (event) => {
      setQuantity(Number(event.target.value))
    }

    const handleAddToCart = () => {
      if (isLoggedIn) {
        // 模擬將商品添加到購物車資料庫
        addToCartDatabase({ ...product, quantity })
        setMessage('商品已成功添加到購物車!')
      } else {
        setMessage('請先登入才能添加商品到購物車!')
      }
    }
    // 模擬添加商品到購物車資料庫的函式
    const addToCartDatabase = (productData) => {
      // 在這裡可以實現將商品資訊發送到後端資料庫的邏輯
      console.log('添加到購物車資料庫:')
      console.log('商品id:', productData.id)
      console.log('購買數量:', quantity)
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
          {message && <p>{message}</p>}
        </div>
          
      </div>
    )
}

/*
export const ProductDisplay = ({ product }) => {
  const [quantity, setQuantity] = useState(1)
  const [cart, setCart] = useState([])
  const [isLoggedIn, setIsLoggedIn] = useState(false) // 新增登入狀態
  const [message, setMessage] = useState('') // 新增訊息狀態


  const handleQuantityChange = (event) => {
    setQuantity(Number(event.target.value))
  }

  /*
  //GreartStack version
  const handleAddToCart = () => {
    setCart([...cart, { ...product, quantity }])
  }
  */
 /*
  const handleAddToCart = () => {
    if (isLoggedIn) {
      // 模擬將商品添加到購物車資料庫
      addToCartDatabase({ ...product, quantity })
      setMessage('商品已成功添加到購物車!')
    } else {
      setMessage('請先登入才能添加商品到購物車!')
    }
  }
  // 模擬添加商品到購物車資料庫的函式
  const addToCartDatabase = (productData) => {
    // 在這裡可以實現將商品資訊發送到後端資料庫的邏輯
    console.log('添加到購物車資料庫:')
    console.log('商品id:', productData.id)
    console.log('購買數量:', quantity)
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
          {/* 下拉式選單可加更多選項 */
/*        </select>
      
     
        <button onClick={handleAddToCart}>加入購物車</button>
        {message && <p>{message}</p>}
      </div>
        
    </div>
  )
}*/