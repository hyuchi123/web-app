import React, { useContext, useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { ShopContext } from '../Context/ShopContext';
import { ProductDisplay } from '../Components/ProductDisplay/ProductDisplay';
import { Breadcrum } from '../Components/Breadcrums/Breadcrum';

export const Product = () => {
  const { allProducts } = useContext(ShopContext);
  const { productId } = useParams();
  const [product, setProduct] = useState(null);

  useEffect(() => {
    // Fetch product by productId from the API
    fetch(`http://localhost:4000/product/${productId}`)
      .then(response => response.json())
      .then(data => setProduct(data))
      .catch(error => console.error('Error fetching product:', error));
  }, [productId]);

  return (
    <div>
      {product ? (
        <>
          <Breadcrum product={product} />
          <ProductDisplay product={product} />
        </>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );

  //   const {all_product} = useContext(ShopContext);
  //   const {productId} = useParams();
  //   const product = all_product.find((e)=> e.id === Number(productId));
  //   console.log('product:', productId);

  //   return (
  //     <div>
  //       <Breadcrum product={product} />
  //       <ProductDisplay product={product} />
  //     </div>
  //   )

};
