import React from 'react'
import './Sidebar.css'
import { Link } from 'react-router-dom'
import add_product_icon from '../../assets/Product_Cart.svg'
import list_product_icon from '../../assets/Product_list_icon.svg'
import logo from '../../assets/logo.png' // 新增的首頁圖標

const Sidebar = () => {

  const handleLogout = () => {
    localStorage.removeItem('auth-token');
    window.location.replace("http://localhost:3000");
  };

  return (
    <div className='sidebar'>
      <Link to={'/'} style={{textDecoration:"none"}}>
        <div className='sidebar-item'>
          <img src={logo} alt="" /> 
          <p>首頁</p>
        </div>
      </Link>
      <Link to={'/addproduct'} style={{textDecoration:"none"}}>
        <div className='sidebar-item'>
          <img src={add_product_icon} alt="" />
          <p>新增商品</p>
        </div>
      </Link>
      <Link to={'/listproducts'} style={{textDecoration:"none"}}>
        <div className='sidebar-item'>
          <img src={list_product_icon} alt="" />
          <p>查看商品</p>
        </div>
      </Link>
      <div className='sidebar-item logout' onClick={handleLogout}>
        <img src="" alt="" /> 
        <p>登出</p>
      </div>
    </div>
  )
}

export default Sidebar