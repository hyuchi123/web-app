import React, {useState, useEffect} from 'react'
import './Popular.css'
import { Item } from '../../Components/Item/Item';

export const Popular = () => {
  
  const [popularProducts, setPopularProducts] = useState([])
  
  useEffect(()=>{
    fetch('http://localhost:4000/popularproducts')
    .then((res)=>res.json())
    .then((data)=>setPopularProducts(data));
  },[])

  return (
    <div className='Popular'>
        <h1>暢銷排行榜</h1>
        <hr/>
        <div className="popular-item">
            {popularProducts.map((item,i)=>{
                return <Item key={i} id={item.id} name={item.name} image={item.image} new_price={item.new_price} old_price={item.old_price}/>
            })}
        </div>
    </div>
  )
}
