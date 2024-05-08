import './App.css';
//import Navbar from './Compoenets/Navbar/Navbar';
//import { BrowserRouter,Routes,Route } from 'react-router-dom';
//import Shop from './Pages/Shop' //首頁
//import ShopCategory from './Pages/ShopCategory';
import { ProductDisplay } from './Components/ProductDisplay/ProductDisplay';
import TempData from './Components/ProductDisplay/TempData';

function App() {
  return (
    <div>
        {TempData.map(product => (
        <ProductDisplay key={product.id} product={product} />
      ))}
    </div>
    
  );
}

export default App;

/*
<div>
        {TempData.map(product => (
        <ProductDisplay key={product.id} product={product} />
      ))}
    </div>
*/

/*
<div>
      <BrowserRouter>
      <Routes>
        <Route path='/' element={<Shop/>}></Route>
        <Route path='/' element={<ShoCategory category=''/>}></Route>

      </Routes>
      
      </BrowserRouter>
    </div>
*/