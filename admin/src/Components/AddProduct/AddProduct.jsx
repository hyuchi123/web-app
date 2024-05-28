import React from 'react'
import './AddProduct.css'
import upload_area from '../../assets/upload_area.svg'
import { useState } from 'react'
import { name } from 'ejs'

const AddProduct = () => {
    const[image, setImage] = useState(null);
    const[productDetails, setProductDetails] = useState({
        name: '',
        old_price: '',
        new_price: '',
        author: '',
        description: '',
        age: '7-9歲',
        topic: '環境教育',
        language: '正體中文',
        image: ''
    });

    const imageHandler = (e) => {
        setImage(e.target.files[0]);

    }
    const changeHandler = (e) => {
        setProductDetails({...productDetails, [e.target.name]: e.target.value});
    }

    const Add_Product = async () => {
        console.log(productDetails);
        let responseData;
        let product = productDetails;

        let formData = new FormData();
        formData.append('product', image);

        await fetch('http://localhost:4000/upload', {
            method: 'POST',
            headers: {
                Accept: 'application/json',
            },
            body: formData
        }).then(response => response.json()).then(data => {responseData=data});

        if (responseData.success) {
            product.image = responseData.image_url;
            console.log(product);
            await fetch('http://localhost:4000/product', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(product),
            }).then(response => response.json()).then(data => {
                data.success ? alert('Product added successfully!') : alert('Failed to add product.');
            }); 
        }
    }

  return (
    <div className='add-product'>
        <div className='addproduct-itemfield'>
            <p>書名</p>
            <input value={productDetails.name} onChange={changeHandler} type="text" name='name' placeholder='Type here'/>
        </div>
        <div className='addproduct-itemfield'>
            <p>敘述</p>
            <input value={productDetails.description} onChange={changeHandler} type="text" name='description' placeholder='Type here'/>
        </div>
        <div className='addproduct-itemfield'>
            <p>作者</p>
            <input value={productDetails.author} onChange={changeHandler} type="text" name='author' placeholder='Type here'/>
        </div>
        <div className="addproduct-price">
            <div className="addproduct-itemfield">
                <p>原價</p>
                <input value={productDetails.old_price} onChange={changeHandler} type="text" name='old_price' placeholder='Type here'/>
            </div>
            <div className="addproduct-itemfield">
                <p>售價</p>
                <input value={productDetails.new_price} onChange={changeHandler} type="text" name='new_price' placeholder='Type here'/>
            </div>
        </div>
        <div className="addproduct-itemfield">
            <p>主題</p>
            <select value={productDetails.topic} onChange={changeHandler} name="topic" className='add-product-selector'>
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
        </div>
        <div className="addproduct-itemfield">
            <p>適讀年齡</p>
            <select value={productDetails.age} onChange={changeHandler} name="age" className='add-product-selector'>
                <option value="7-9歲">7-9歲</option>
                <option value="10-12歲">10-12歲</option>
                <option value="13-15歲">13-15歲</option>
            </select>
        </div>
        <div className="addproduct-itemfield">
            <p>語言</p>
            <select value={productDetails.language} onChange={changeHandler} name="language" className='add-product-selector'>
                <option value="正體中文">正體中文</option>
                <option value="英文">英文</option>
            </select>
        </div>
        <div className='addproduct-itemfield'>
            <label htmlFor="file-input">
                <img src={image ? URL.createObjectURL(image) : upload_area} className='addproduct-thumnail-img' />
            </label>
            <input onChange={imageHandler} type="file" name='image' id='file-input' hidden/>
        </div>
        <button onClick={() => Add_Product()} className='addproduct-btn'>Add</button>
    </div>
  )
}

export default AddProduct