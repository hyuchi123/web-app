import './App.css';
import {Navbar} from './Components/Navbar/Navbar';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import {Shop} from './Pages/Shop';
import {ShopCategory} from './Pages/ShopCategory';
import {Product} from './Pages/Product';
import {Cart} from './Pages/Cart';
import {LoginSignup} from './Pages/LoginSignup';
import {Footer} from './Components/Footer/Footer';
import men_banner from './Components/Assets/banner_mens.png';
import women_banner from './Components/Assets/banner_women.png';
import kid_banner from './Components/Assets/banner_kids.png';

function App() {
  return (  
    <div className="container">
      <BrowserRouter>
      <Navbar/>
      <Routes>
        <Route path='/' element={<Shop/>}/>
        <Route path='/age/7-9' element={<ShopCategory banner={women_banner} category="7-9歲"/>}/>
        <Route path='/age/10-12' element={<ShopCategory banner={women_banner} category="10-12歲"/>}/>
        <Route path='/age/13-15' element={<ShopCategory banner={women_banner} category="13-15歲"/>}/>
        <Route path='/language/Chinese' element={<ShopCategory banner={women_banner} category="正體中文"/>}/>
        <Route path='/language/English' element={<ShopCategory banner={women_banner} category="英文"/>}/>
        <Route path='/theme/環境教育' element={<ShopCategory banner={men_banner} category="環境教育"/>}/>
        <Route path='/theme/綜合活動' element={<ShopCategory banner={men_banner} category="綜合活動"/>}/>
        <Route path='/theme/社會' element={<ShopCategory banner={men_banner} category="社會"/>}/>
        <Route path='/theme/生涯發展教育' element={<ShopCategory banner={men_banner} category="生涯發展教育"/>}/>
        <Route path='/theme/自然與生活科技' element={<ShopCategory banner={men_banner} category="自然與生活科技"/>}/>
        <Route path='/theme/藝術與人文' element={<ShopCategory banner={men_banner} category="藝術與人文"/>}/>
        <Route path='/theme/健康與體育' element={<ShopCategory banner={men_banner} category="健康與體育"/>}/>
        <Route path='/theme/家政教育' element={<ShopCategory banner={men_banner} category="家政教育"/>}/>
        <Route path='/theme/生活' element={<ShopCategory banner={men_banner} category="生活"/>}/>
        <Route path='/product' element = {<Product/>}>
          <Route path='/productId' element={<Product/>}/> 
        </Route>
        <Route path='/cart' element={<Cart/>}/>
        <Route path='/login' element={<LoginSignup/>}/>
      </Routes>
      <Footer/> 
      </BrowserRouter>
    </div>
  );
}

export default App;

