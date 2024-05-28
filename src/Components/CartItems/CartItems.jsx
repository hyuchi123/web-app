import React, { useContext } from 'react'
import { useNavigate } from 'react-router-dom';
import './CartItems.css'
import { ShopContext } from '../../Context/ShopContext'
import remove_icon from '../Assets/cart_cross_icon.png'

export const CartItems = () => {
    const { getTotalCartAmount, data, cartItems, removeFromCart, clearCart } = useContext(ShopContext);
    const navigate = useNavigate();

    const handlePayment = async () => {
        // 從 localStorage 獲取 auth-token
        const authToken = localStorage.getItem('auth-token');

        // 檢查 token 是否存在
        if (!authToken) {
            alert('身份驗證失敗，請重新登入');
            return;
        }

        try {
            console.log('Sending DELETE request to clear cart');
            const response = await fetch('http://localhost:4000/cart', {
                method: 'DELETE',
                headers: {
                    'Content-Type': 'application/json',
                    'auth-token': authToken // 使用從 localStorage 中獲取的 token
                }
            });

            console.log('Received response:', response);
            if (response.ok) {
                console.log('Cart cleared successfully');
                await clearCart(); // 清空前端購物車
                alert('付款成功！訂單已成立');
                navigate('/');
            } else {
                const errorData = await response.json();
                console.error('Error response data:', errorData);
                throw new Error(errorData.errors || '付款失敗');
            }
        } catch (error) {
            console.error('Error clearing cart:', error.message);
            alert('付款過程中出現錯誤，請稍後再試');
        }
    };

    return (
        <div className='cartitems'>
            <div className="cartitems-format-main">
                <p>繪本</p>
                <p>書名</p>
                <p>價格</p>
                <p>數量</p>
                <p>小計</p>
                <p>移出購物車</p>
            </div>
            <hr />
            {data.map((e) => {
                if (cartItems[e.id] > 0) {
                    return (
                        <div key={e.id}>
                            <div className="cartitems-format cartitems-format-main">
                                <img src={e.image} alt="" className='carticon-product-icon' />
                                <p>{e.name}</p>
                                <p>${e.new_price}</p>
                                <button className='cartitems-quantity'>{cartItems[e.id]}</button>
                                <p>{e.new_price * cartItems[e.id]}</p>
                                <img className='cartitems-remove-icon' src={remove_icon} onClick={() => { removeFromCart(e.id) }} alt="" />
                            </div>
                            <hr />
                        </div>
                    );
                }
                return null;
            })}
            <div className="cartitems-down">
                <div className="cartitems-total">
                    <h1>購物車總計</h1>
                    <div>
                        <div className="cartitems-total-item">
                            <p>商品總計</p>
                            <p>${getTotalCartAmount()}</p>
                        </div>
                        <hr />
                        <div className="cartitems-total-item">
                            <p>運費</p>
                            <p>$0</p>
                        </div>
                        <hr />
                        <div className="cartitems-total-item">
                            <h3>總金額</h3>
                            <h3>${getTotalCartAmount()}</h3>
                        </div>
                    </div>
                </div>
                <div className="cartitems-credit">
                    <h1>信用卡付款</h1>
                    <br />
                    <p>請輸入信用卡卡號、有效期限與安全碼</p>
                    <div className="cartitems-box">
                        <input type="text" placeholder='信用卡卡號：共 16 碼' />
                    </div>
                    <div className="cartitems-box">
                        <input type="text" placeholder='信用卡使用期限： month/year' />
                    </div>
                    <div className="cartitems-box">
                        <input type="text" placeholder='信用卡安全碼' />
                    </div>
                    <button onClick={handlePayment}>立即付款</button>
                </div>
            </div>
        </div>
    )
}
