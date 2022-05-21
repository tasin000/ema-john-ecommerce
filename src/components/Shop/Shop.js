import React from 'react';
import Product from '../Product/Product';
import './Shop.css';
import Cart from '../Cart/Cart';
import { addToDb } from '../../utilities/fakedb';
import useProducts from '../../hooks/useProducts';
import useCart from '../../hooks/useCart';

const Shop = () => {
     const [products] = useProducts();
     const [cart, setCart] = useCart(products);

     const handleAddToCart = product => { 
          setCart([...cart, product]);
          addToDb(product.id);
     };

     const clearCart = _ => {
          localStorage.setItem('shopping-cart', JSON.stringify({}));
          setCart([]);
     }

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