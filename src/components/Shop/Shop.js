import React, { useEffect, useState } from 'react';
import Product from '../Product/Product';
import './Shop.css';
import Cart from '../Cart/Cart';
import { addToDb } from '../../utilities/fakedb';

const Shop = () => {
     const [products, setProducts] = useState([]);
     const [cart, setCart] = useState([]);

     useEffect(() => {
          fetch('products.json')
               .then(res => res.json())
               .then(data => setProducts(data))
     }, [])

     const handleAddToCart = product => { 
          setCart([...cart, product]);
          addToDb(product.id);
     };
     const clearCart = _ => {setCart([]);}

     return (
          <div className='shop-container'>
               <div className="products-container">
                    {
                         products.map(product =>
                              <Product
                                   key={product.id}
                                   pd={product}
                                   handleAddToCart={handleAddToCart}
                              />
                         )
                    }
               </div>

               <div className="cart-container">
                    <Cart cart={cart} clearCart={clearCart} />
               </div>
          </div>
     );
};

export default Shop;