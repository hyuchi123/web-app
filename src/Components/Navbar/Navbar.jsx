import React, { useState } from 'react' 
import { useContext } from 'react'
import './Navbar.css'
import logo from '../Assets/logo.png'
import cart_icon from '../Assets/cart_icon.png'
import { Link } from 'react-router-dom'
import { ShopContext } from '../../Context/ShopContext'

export const Navbar = () => {
    const [menu, setMenu] = useState("shop");
    const [showAgeDropdown, setShowAgeDropdown] = useState(false);
    const [showLanguageDropdown, setShowLanguageDropdown] = useState(false);
    const [showThemeDropdown, setShowThemeDropdown] = useState(false);
    const {getTotalCartItems} = useContext(ShopContext);


    return (
        <div className='navbar'>
            <div className='nav-logo'>
                <Link to='/' style={{ display: 'flex', alignItems: 'center', textDecoration: 'none'}}>
                <img src={logo} alt="Logo" width="100" height="100" />
                <p>快樂書朋友</p>
                </Link>
            </div>
            <ul className='nav-menu'>
                <li>
                    <span className="menu" onMouseEnter={() => setShowAgeDropdown(true)} onMouseLeave={() => setShowAgeDropdown(false)}>
                        年齡
                        {showAgeDropdown && (
                            <div className="dropdown">
                                <Link style={{ textDecoration: 'none' }} to='/age/7-9'>7-9歲</Link>
                                <Link style={{ textDecoration: 'none' }} to='/age/10-12'>10-12歲</Link>
                                <Link style={{ textDecoration: 'none' }} to='/age/13-15'>13-15歲</Link>
                            </div>
                        )}
                    </span>
                </li>
                <li>
                    <span className="menu" onMouseEnter={() => setShowLanguageDropdown(true)} onMouseLeave={() => setShowLanguageDropdown(false)}>
                        語言
                        {showLanguageDropdown && (
                            <div className="dropdown">
                                <Link style={{ textDecoration: 'none' }} to='/language/Chinese'>中文</Link>
                                <Link style={{ textDecoration: 'none' }} to='/language/English'>英文</Link>
                            </div>
                        )}
                    </span>
                </li>
                <li>
                    <span className="menu" onMouseEnter={() => setShowThemeDropdown(true)} onMouseLeave={() => setShowThemeDropdown(false)}>
                        主題
                        {showThemeDropdown && (
                            <div className="dropdown">
                                <Link style={{ textDecoration: 'none' }} to='/theme/環境教育'>環境教育</Link>
                                <Link style={{ textDecoration: 'none' }} to='/theme/綜合活動'>綜合活動</Link>
                                <Link style={{ textDecoration: 'none' }} to='/theme/社會'>社會</Link>
                                <Link style={{ textDecoration: 'none' }} to='/theme/生涯發展教育'>生涯發展教育</Link>
                                <Link style={{ textDecoration: 'none' }} to='/theme/自然與生活科技'>自然與生活科技</Link>
                                <Link style={{ textDecoration: 'none' }} to='/theme/藝術與人文'>藝術與人文</Link>
                                <Link style={{ textDecoration: 'none' }} to='/theme/健康與體育'>健康與體育</Link>
                                <Link style={{ textDecoration: 'none' }} to='/theme/家政教育'>家政教育</Link>
                                <Link style={{ textDecoration: 'none' }} to='/theme/生活'>生活</Link>
                            </div>
                        )}
                    </span>
                </li>
                <li>
                    {localStorage.getItem('auth-token')? (
                    <>    
                        <span className="menu">
                            <Link style={{ textDecoration: 'none', color:'#626262' }} to='/orders'>訂單列表</Link>
                        </span>
                    </>
                    ) : <></>}
                </li>   
            </ul>
            <div className='nav-login-cart'>
                {localStorage.getItem('auth-token')
                ?<button onClick={()=> {localStorage.removeItem('auth-token'); window.location.replace('/')}}>登出</button>
                :<Link to='/login'><button>登入</button></Link>}
                <Link to='/cart'><img src={cart_icon} alt="" /></Link>
                <div className="nav-cart-count">{getTotalCartItems()}</div>
            </div>
        </div>
    );
};


