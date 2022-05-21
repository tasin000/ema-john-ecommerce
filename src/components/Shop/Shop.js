import React from 'react';
import Product from '../Product/Product';
import './Shop.css';
import Cart from '../Cart/Cart';
import { addToDb } from '../../utilities/fakedb';
import useProducts from '../../hooks/useProducts';
import useCart from '../../hooks/useCart';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRightLong, faTrashAlt } from '@fortawesome/free-solid-svg-icons';
import { useNavigate } from 'react-router-dom';

const Shop = () => {
     const [products] = useProducts();
     const [cart, setCart] = useCart(products);
     let navigate = useNavigate();

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
                    <div className="btn-group">
                         <button className="clear-cart-btn" onClick={clearCart}>
                              Clear Cart
                              <FontAwesomeIcon icon={faTrashAlt} />
                         </button>

                         <button className='review-order-btn' onClick={() => navigate('/orders')}>
                              Review Order
                              <FontAwesomeIcon icon={faArrowRightLong} />
                         </button>
                    </div>
               </div>
          </div>
     );
};

export default Shop;