import React from 'react'
import { useContext } from 'react'
import './CSS/ShopCategory.css'
import { ShopContext } from '../Context/ShopContext'
import {Item} from '../Components/Item/Item'
import dropdown_icon from '../Components/Assets/dropdown_icon.png'


export const ShopCategory = (props) => {
  const {all_product} = useContext(ShopContext);
  return (
    <div className="shop-category">
      <img className='shopcategory-banner' src={props.banner} alt="" />
      <div className="shopcategory-indexSort">
        <p>
          <span>Showing 1-12</span> out of 36 products
        </p>
        <div className="shopcategory-sort">
          Sort by <img src={dropdown_icon} alt=""/>
        </div>
      </div>
      <div className="shopcategory-products">
        {all_product.map((item,i)=>{
          if (props.category===item.categroy){
            return <Item key={i} id={item.id} name={item.name} image={item.image} price={item.price}/>
          }
          else{
            return null;
          }
        })}
      </div>
    </div>
  )
}
