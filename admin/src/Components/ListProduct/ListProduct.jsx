import React from 'react'
import './ListProduct.css'
import { useState, useEffect } from 'react'
import cross_icon from '../../assets/cross_icon.png'

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

  const handleRemoveProduct = (productId) => {
    removeProduct(productId);
    fetchInfo();
  };

  const [allproducts, setAllProducts] = useState([]);
  const fetchInfo = async () => {
    try {
      const response = await fetch('http://localhost:4000/products');
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      const data = await response.json();
      setAllProducts(data);
    } catch (error) {
      console.error('Fetch error:', error);
    }
  };

  useEffect(() => {fetchInfo()},[]);

  return (
    <div className='list-product'>
      <h1>All Products List</h1>
      <div className="listproduct-format-main">
        <p>Products</p>
        <p>Title</p>
        <p>Old Price</p>
        <p>New Price</p>
        <p>Author</p>
        <p>Topic</p>
        <p>Age</p>
        <p>Language</p>
        <p>Remove</p>
      </div>
      <div className="listproduct-allproducts">
        <hr />
        {allproducts.map((product, index) => {
          return (<>
            <div key={product.id} className="listproduct-format-main listproduct-format">
              <img src={product.image} alt="" className='listproduct-product-icon'/>
              <p>{product.name}</p>
              <p>${product.old_price}</p>
              <p>${product.new_price}</p>
              <p>{product.author}</p>
              <p>{product.topic}</p>
              <p>{product.age}</p>
              <p>{product.language}</p>
              <img onClick={() => {handleRemoveProduct(product.id)}}src={cross_icon} alt="" className='listproduct-remove-icon'/>
            </div>
            <hr />
            </>
          )
        })}
      </div>
    </div>
  )
}

export default ListProduct