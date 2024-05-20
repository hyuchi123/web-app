import React, {useState, useEffect} from 'react'
import './NewCollections.css'
import { Item } from '../../Components/Item/Item';

export const NewCollections = () => {

  const [new_collection, setNewCollection] = useState([])
  
  useEffect(()=>{
    fetch('http://localhost:4000/newcollections')
    .then((res)=>res.json())
    .then((data)=>setNewCollection(data));
  },[])

  return (
    <div className='new-collections'>
        <h1>新書到貨</h1>
        <hr />
        <div className="collections">
            {new_collection.map((item,i)=>{
                return <Item key={i} id={item.id} name={item.name} image={item.image} new_price={item.new_price} old_price={item.old_price}/>
    
            })}
        </div>
    </div>
  )
}
