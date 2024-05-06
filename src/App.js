import './App.css';
//import ProductPage from './Components/ProductPage';
//import PPagetest from './components/PPagetest';
//import Product from './Components/Product';
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
