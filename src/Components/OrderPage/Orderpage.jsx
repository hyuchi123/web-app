import React, {useEffect, useState} from "react";
import './Orderpage.css'
export const OrderPage = () => {
    const [orders, setOrders] = useState([]);

    useEffect(() => {
        if(localStorage.getItem('auth-token')) {
            fetch('http://localhost:4000/orders', {
                method: 'GET',
                headers: {
                    Accept: 'application/json',
                    'auth-token': localStorage.getItem('auth-token'),
                },
            }).then((response) => response.json()).then((data) => setOrders(data));
        }
    }, []);

    return (
        <div className="order-page">
          <h1>訂單資訊</h1>
          {orders.length === 0 ? (
            <p>沒有訂單可顯示</p>
          ) : (
            <ul>
              {orders.map((order) => (
                <li key={order._id} className="order-card">
                  <h2>訂單編號: {order._id}</h2>
                  <p>總金額: ${order.totalAmount}</p>
                  <p>訂單時間: {new Date(order.date).toLocaleString()}</p>
                  <h3>商品:</h3>
                  <ul className="order-items">
                    {order.items.map((item, index) => (
                      <li key={index} className="order-item">
                        <p>書名: {item.productname}</p>
                        <p>數量: {item.quantity}</p>
                        <p>單價: ${item.price}</p>
                      </li>
                    ))}
                  </ul>
                </li>
              ))}
            </ul>
          )}
        </div>
      );

}