import React from 'react'
import './Navbar.css'
import navlogo from '../../assets/nav-logo.png'
import navProfile from '../../assets/user-cover.jpg'

const Navbar = () => {
  return (
    <div className='navbar'>
        <img src={navlogo} alt="" className='nav-logo'/>
        <img src={navProfile} alt="" className='nav-profile'/>
    </div>
  )
}

export default Navbar