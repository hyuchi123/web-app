import React, { useContext } from 'react';
import './CSS/ShopCategory.css';
import { ShopContext } from '../Context/ShopContext';
import { Item } from '../Components/Item/Item';
import dropdown_icon from '../Components/Assets/dropdown_icon.png';

export const ShopCategory = (props) => {
  const { data } = useContext(ShopContext);

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
        {data.map((item) => {
          const { categories } = item;
    // 遍历商品的分类信息
          for (let category of categories) {
      // 如果任何一个分类与当前 props.category 匹配，则显示该商品
            if (category === props.category) {
            return <Item key={item.id} id={item.id} name={item.name} image={item.image} price={item.new_price} />;
          }
        }
    // 如果没有匹配的分类，则不显示该商品
        return null;
        })}
      </div>
    </div>
  );
};
