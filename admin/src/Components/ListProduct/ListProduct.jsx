// import React from 'react'
// import './ListProduct.css'
// import { useState, useEffect } from 'react'
// import cross_icon from '../../assets/cross_icon.png'

// const removeProduct = async (productId) => {
//   try {
//     const response = await fetch(`http://localhost:4000/product/${productId}`, {
//       method: 'DELETE',
//       headers: {
//         'Content-Type': 'application/json',
//       },
//     });
//     const data = await response.json();
//     if (data.success) {
//       alert(`Product "${data.name}" removed successfully!`);
//     } else {
//       alert('Failed to remove product.');
//     }
//   } catch (error) {
//     console.error('Error:', error);
//     alert('An error occurred while removing the product.');
//   }
// };

// const ListProduct = () => {

//   const handleRemoveProduct = (productId) => {
//     removeProduct(productId);
//     fetchInfo();
//   };

//   const [allproducts, setAllProducts] = useState([]);
//   const fetchInfo = async () => {
//     try {
//       const response = await fetch('http://localhost:4000/products');
//       if (!response.ok) {
//         throw new Error('Network response was not ok');
//       }
//       const data = await response.json();
//       setAllProducts(data);
//     } catch (error) {
//       console.error('Fetch error:', error);
//     }
//   };

//   useEffect(() => {fetchInfo()},[]);

//   return (
//     <div className='list-product'>
//       <h1>All Products List</h1>
//       <div className="listproduct-format-main">
//         <p>Products</p>
//         <p>Title</p>
//         <p>Old Price</p>
//         <p>New Price</p>
//         <p>Author</p>
//         <p>Topic</p>
//         <p>Age</p>
//         <p>Language</p>
//         <p>Remove</p>
//       </div>
//       <div className="listproduct-allproducts">
//         <hr />
//         {allproducts.map((product, index) => {
//           return (<>
//             <div key={product.id} className="listproduct-format-main listproduct-format">
//               <img src={product.image} alt="" className='listproduct-product-icon'/>
//               <p>{product.name}</p>
//               <p>${product.old_price}</p>
//               <p>${product.new_price}</p>
//               <p>{product.author}</p>
//               <p>{product.topic}</p>
//               <p>{product.age}</p>
//               <p>{product.language}</p>
//               <img onClick={() => {handleRemoveProduct(product.id)}}src={cross_icon} alt="" className='listproduct-remove-icon'/>
//             </div>
//             <hr />
//             </>
//           )
//         })}
//       </div>
//     </div>
//   )
// }

// export default ListProduct

import React, { useState, useEffect } from 'react';
import './ListProduct.css';
import cross_icon from '../../assets/cross_icon.png';

const removeProduct = async (productId) => {
  try {
    const response = await fetch(`http://localhost:4000/product/${productId}`, {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json',
      },
    });
    const data = await response.json();
    if (data.success) {
      alert(`Product "${data.name}" removed successfully!`);
    } else {
      alert('Failed to remove product.');
    }
  } catch (error) {
    console.error('Error:', error);
    alert('An error occurred while removing the product.');
  }
};

const ListProduct = () => {
  const [allProducts, setAllProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [sortOrder, setSortOrder] = useState('latest');
  const [filters, setFilters] = useState({
    topic: '',
    age: '',
    language: ''
  });

  const fetchInfo = async () => {
    try {
      const response = await fetch('http://localhost:4000/products');
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      const data = await response.json();
      setAllProducts(data);
      setFilteredProducts(data); // Initially, filteredProducts is the same as allProducts
    } catch (error) {
      console.error('Fetch error:', error);
    }
  };

  useEffect(() => {
    fetchInfo();
  }, []);

  useEffect(() => {
    filterAndSortProducts();
  }, [filters, sortOrder]);

  const handleRemoveProduct = (productId) => {
    removeProduct(productId);
    fetchInfo();
  };

  const toggleSortOrder = () => {
    setSortOrder(sortOrder === 'latest' ? 'oldest' : 'latest');
  };

  const handleFilterChange = (e) => {
    const { name, value } = e.target;
    setFilters((prevFilters) => ({
      ...prevFilters,
      [name]: value
    }));
  };

  const filterAndSortProducts = () => {
    let products = [...allProducts];

    // Filter products
    if (filters.topic) {
      products = products.filter((product) => product.topic.includes(filters.topic));
    }
    if (filters.age) {
      products = products.filter((product) => product.age.includes(filters.age));
    }
    if (filters.language) {
      products = products.filter((product) => product.language.includes(filters.language));
    }

    // Sort products
    products.sort((a, b) => {
      const orderA = new Date(a.id);
      const orderB = new Date(b.id);
      return sortOrder === 'latest' ? orderB - orderA : orderA - orderB;
    });

    setFilteredProducts(products);
  };

  return (
    <div className='list-product'>
      <h1>商品列表</h1>
      <div className="listproduct-actions">
        <button onClick={toggleSortOrder}>
          Sort by {sortOrder === 'latest' ? 'Oldest' : 'Latest'}
        </button>
      </div>
      <div className="listproduct-filters">
        <select name="topic" onChange={handleFilterChange}>
          <option value="">全選</option>
          <option value="環境教育">環境教育</option>
          <option value="綜合活動">綜合活動</option>
          <option value="社會">社會</option>
          <option value="生涯發展教育">生涯發展教育</option>
          <option value="自然與生活科技">自然與生活科技</option>
          <option value="藝術與人文">藝術與人文</option>
          <option value="健康與體育">健康與體育</option>
          <option value="家政教育">家政教育</option>
          <option value="生活">生活</option>
        </select>
        <select name="age" onChange={handleFilterChange}>
          <option value="">全選</option>
          <option value="7-9歲">7-9歲</option>
          <option value="10-12歲">10-12歲</option>
          <option value="13-15歲">13-15歲</option>
        </select>
        <select name="language" onChange={handleFilterChange}>
          <option value="">全選</option>
          <option value="正體中文">正體中文</option>
          <option value="英文">英文</option>
        </select>
      </div>
      <div className="listproduct-format-main">
        <p></p>
        <p>書名</p>
        <p>原價</p>
        <p>售價</p>
        <p>作者</p>
        <p>主題</p>
        <p>適讀年齡</p>
        <p>語言</p>
        <p></p>
      </div>
      <div className="listproduct-allproducts">
        <hr />
        {filteredProducts.map((product, index) => {
          return (
            <React.Fragment key={product.id}>
              <div className="listproduct-format-main listproduct-format">
                <img src={product.image} alt="" className='listproduct-product-icon' />
                <p>{product.name}</p>
                <p>${product.old_price}</p>
                <p>${product.new_price}</p>
                <p>{product.author}</p>
                <p>{product.topic}</p>
                <p>{product.age}</p>
                <p>{product.language}</p>
                <img onClick={() => { handleRemoveProduct(product.id) }} src={cross_icon} alt="" className='listproduct-remove-icon' />
              </div>
              <hr />
            </React.Fragment>
          );
        })}
      </div>
    </div>
  );
};

export default ListProduct;
