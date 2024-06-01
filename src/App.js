import "./App.css";
import { Navbar } from "./Components/Navbar/Navbar";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Shop } from "./Pages/Shop";
import { ShopCategory } from "./Pages/ShopCategory";
import { Product } from "./Pages/Product";
import { Cart } from "./Pages/Cart";
import { LoginSignup } from "./Pages/LoginSignup";
import { Order } from "./Pages/Order";
import { Footer } from "./Components/Footer/Footer";
import banner_1 from "./Components/Assets/banner_12.jpg";  
import banner_2 from "./Components/Assets/banner_13.jpg";  
import banner_3 from "./Components/Assets/banner_15.jpg";  

function App() {
  return (
    <div className="container">
      <BrowserRouter>
      <Navbar/>
      <Routes>
        <Route path='/' element={<Shop/>}/>
        <Route path='/age/7-9' element={<ShopCategory banner={banner_1 } category="7-9歲"/>}/>
        <Route path='/age/10-12' element={<ShopCategory banner={banner_1 } category="10-12歲"/>}/>
        <Route path='/age/13-15' element={<ShopCategory banner={banner_1 } category="13-15歲"/>}/>
        <Route path='/language/Chinese' element={<ShopCategory banner={banner_1 } category="正體中文"/>}/>
        <Route path='/language/English' element={<ShopCategory banner={banner_1 } category="英文"/>}/>
        <Route path='/theme/環境教育' element={<ShopCategory banner={banner_2} category="環境教育"/>}/>
        <Route path='/theme/綜合活動' element={<ShopCategory banner={banner_2} category="綜合活動"/>}/>
        <Route path='/theme/社會' element={<ShopCategory banner={banner_2} category="社會"/>}/>
        <Route path='/theme/生涯發展教育' element={<ShopCategory banner={banner_2} category="生涯發展教育"/>}/>
        <Route path='/theme/自然與生活科技' element={<ShopCategory banner={banner_2} category="自然與生活科技"/>}/>
        <Route path='/theme/藝術與人文' element={<ShopCategory banner={banner_3} category="藝術與人文"/>}/>
        <Route path='/theme/健康與體育' element={<ShopCategory banner={banner_3} category="健康與體育"/>}/>
        <Route path='/theme/家政教育' element={<ShopCategory banner={banner_3} category="家政教育"/>}/>
        <Route path='/theme/生活' element={<ShopCategory banner={banner_3} category="生活"/>}/>
        <Route path="/orders" element={<Order/>}/>
        <Route path="/product/:productId" element={<Product />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/login" element={<LoginSignup />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
