import React from 'react';
import './Breadcrum.css';
import arrow_icon from '../Assets/breadcrum_arrow.png';

export const Breadcrum = ({ product }) => {
    console.log('product:', product);
    return (
        <div className="breadcrum">
            HOME <img src={arrow_icon} alt="" /> SHOP <img src={arrow_icon} alt="" /> {product.name}
            {/* to be modified since we have age, language, and topic */}
        </div>
    );
}