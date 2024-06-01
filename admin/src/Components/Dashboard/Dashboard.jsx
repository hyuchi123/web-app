import React, { useEffect, useState } from 'react'
import './Dashboard.css'

const Dashboard = () => {
  const [ordersCount, setOrdersCount] = useState(0);
  const [usersCount, setUsersCount] = useState(0);
  const [productsCount, setProductsCount] = useState(0);

  useEffect(() => {
    const urlParams = new URLSearchParams(window.location.search);
        const token = urlParams.get('token');
        
        if (token) {
            // 将 token 存储在 localStorage 中
            localStorage.setItem('auth-token', token);
            console.log("Token stored in localStorage:", localStorage.getItem('auth-token'));
            // 清除 URL 参数
            window.history.replaceState({}, document.title, window.location.pathname);
        }
        
    // Fetch orders count
    fetch('http://localhost:4000/admin/orderscount')
      .then(response => response.json())
      .then(data => setOrdersCount(data.count));
    
    // Fetch users count
    fetch('http://localhost:4000/admin/userscount')
      .then(response => response.json())
      .then(data => setUsersCount(data.count));
    
    // Fetch products count
    fetch('http://localhost:4000/admin/productscount')
      .then(response => response.json())
      .then(data => setProductsCount(data.count));
  }, []);

  return (
    <div className='dashboard'>
      <h1>Admin Dashboard</h1>
      <div className='dashboard-stats'>
        <div className='stat'>
          <h2>訂單數量</h2>
          <p>{ordersCount}</p>
        </div>
        <div className='stat'>
          <h2>會員數量</h2>
          <p>{usersCount}</p>
        </div>
        <div className='stat'>
          <h2>產品數量</h2>
          <p>{productsCount}</p>
        </div>
      </div>
    </div>
  )
}

export default Dashboard
