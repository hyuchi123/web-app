import React from 'react'
import './Admin.css'
import Sidebar from '../../Components/Sidebar/Sidebar'
import { Routes, Route } from 'react-router-dom'
import AddProduct from '../../Components/AddProduct/AddProduct'
import ListProduct from '../../Components/ListProduct/ListProduct'
import Dashboard from '../../Components/Dashboard/Dashboard'

const Admin = () => {
  return (
    <div className='admin'>
        <Sidebar />
        <div className='admin-content'>
          <Routes>
            <Route path='/' element={<Dashboard />} />
            <Route path='/addproduct' element={<AddProduct />} />
            <Route path='/listproducts' element={<ListProduct />} />
          </Routes>
        </div>
    </div>
  )
}

export default Admin
