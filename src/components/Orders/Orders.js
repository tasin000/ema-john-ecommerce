import React from 'react';
import './Orders.css';
import useProducts from '../../hooks/useProducts';
import useCart from '../../hooks/useCart';
import ReviewItem from '../ReviewItem/ReviewItem';
import Cart from '../Cart/Cart';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCreditCard } from '@fortawesome/free-solid-svg-icons';
import { useNavigate } from 'react-router-dom';
import { removeFromDb } from '../../utilities/fakedb';

const Orders = () => {
     const [products] = useProducts();
     const [cart, setCart] = useCart(products);
     let navigate = useNavigate();

     const handleRemoveFromOrders = id => {
          const removedItem = cart.filter(item => item.id !== id);
          setCart(removedItem);
          removeFromDb(id);
     }

     return (
          <div className='review-shop-container'>
               <div className="review-items-container">
                    {
                         cart.map(product =>
                              <ReviewItem
                                   key={product.id}
                                   pd={product}
                                   handleRemoveFromOrders={handleRemoveFromOrders}
                              />)
                    }
               </div>

               <div className="review-cart-container">
                    <Cart cart={cart}>
                         <button className='review-order-btn' onClick={() => navigate('/order-review')} >
                              Proceed Checkout
                              <FontAwesomeIcon icon={faCreditCard} />
                         </button>
                    </Cart>
               </div>
          </div>
     );
};

export default Orders;