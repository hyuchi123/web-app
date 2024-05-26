import React from 'react'
import './Hero.css'
import home_pic_2 from '../Assets/home_pic.png'

export const Hero = () => {
  return (
    <div className='hero'>
        <div className="home-pic">
            <img src={home_pic_2} alt="" />
        </div>
    </div>
  )
}
