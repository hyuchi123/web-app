import React, { useContext, useState, useEffect} from 'react';
import './CSS/ShopCategory.css';
import { ShopContext } from '../Context/ShopContext';
import { Item } from '../Components/Item/Item';
import dropdown_icon from '../Components/Assets/dropdown_icon.png';

export const ShopCategory = (props) => {
  const { data } = useContext(ShopContext);
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 12;
  
  //分類變更時，將當前頁數設為1
  useEffect(() => {
    setCurrentPage(1);
  }, [props.category]);
  
  // 篩選符合當前分類的項目
  const filteredItems = data.filter(item => 
    props.category === item.topic || props.category === item.age || props.category === item.language
  );  

  // 計算分頁所需的數據
  const totalItems = filteredItems.length;
  const totalPages = Math.ceil(totalItems / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;  
  // 計算當前頁顯示的商品
  const currentItems = filteredItems.slice(startIndex, startIndex + itemsPerPage);

  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  }

  return (
    <div className="shop-category">
      <img className='shopcategory-banner' src={props.banner} alt="" />
      <h1>{props.category}</h1>
      <hr/>
      <div className="shopcategory-indexSort">
        <p>
          <span>顯示第 {(startIndex + 1)}-{startIndex + currentItems.length}個商品，共有 {totalItems} 個商品</span>
        </p>
      </div>
      <div className="shopcategory-products">
      {currentItems.map(item => (
          <Item key={item.id} id={item.id} name={item.name} image={item.image} new_price={item.new_price} old_price={item.old_price}/>
        ))}
      </div>

      <div className="pagination">
        {Array.from({ length: totalPages }, (_, index) => (
          <button
            key={index + 1}
            onClick={() => handlePageChange(index + 1)}
            className={currentPage === index + 1 ? 'active' : ''}
          >
            {index + 1}
          </button>
        ))}
      </div>
    </div>
  );
};
