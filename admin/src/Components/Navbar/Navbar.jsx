import React from 'react'
import './Navbar.css'
import navlogo from '../../assets/nav-logo.png'
import navProfile from '../../assets/user-cover.jpg'

const Navbar = () => {
  return (
    <div className='navbar'>
        <img src={navlogo} alt="" className='nav-logo'/>
        <h1>Admin Dashboard</h1>
        <img src={navProfile} alt="" className='nav-profile'/>
    </div>
  )
}

export default Navbar