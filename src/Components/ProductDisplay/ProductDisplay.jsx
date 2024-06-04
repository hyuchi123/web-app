import React, { useContext } from 'react'
import { useState } from 'react'
import './ProductDisplay.css'
import { ShopContext } from '../../Context/ShopContext'


export const ProductDisplay = (props) => {
    const {product} = props
    const {addToCart} = useContext(ShopContext)
    const [quantity, setQuantity] = useState(1)
    const [cart, setCart] = useState([])
    const [isLoggedIn, setIsLoggedIn] = useState(false) // 新增登入狀態
    const [message, setMessage] = useState('') // 新增訊息狀態

    const handleQuantityChange = (event) => {
      setQuantity(Number(event.target.value))
    }

    const handleAddToCart = () => {
      addToCart(product.id, quantity);
      setMessage(`已將 ${quantity} 件商品添加到購物車!`);
    };

 return (
    <div className='productdisplay'>
      <div className='product_image'>
        <img className='productdisplay_image' src={product.image} alt='' />
      </div>

      <div className="product_info">
        <h1>{product.name}</h1>
        <div className="price">${product.new_price}</div>
        <div className="author">作者：{product.author}</div>
        <div className="description">介紹：{product.description}</div>
        <div className="age">適讀年齡：{product.age}</div>
        <div className="language">語言：{product.language}</div>
        <div className="topic">主題：{product.topic}</div>
      
      <label htmlFor="quantity">數量:</label>
        <select id="quantity" value={quantity} onChange={handleQuantityChange}>
          <option value="1">1</option>
          <option value="2">2</option>
          <option value="3">3</option>
          <option value="4">4</option>
          <option value="5">5</option>
          {/* 下拉式選單可加更多選項 */}
          </select>
          <button onClick={()=>{handleAddToCart()}}>加入購物車</button>
          {message && <p>{message}</p>}
        </div>
      </div>
    )
}
