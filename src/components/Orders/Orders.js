import React from 'react';
import './Orders.css';
import useProducts from '../../hooks/useProducts';
import useCart from '../../hooks/useCart';
import ReviewItem from '../ReviewItem/ReviewItem';
import Cart from '../Cart/Cart';

const Orders = () => {
     const [products, setProducts] = useProducts();
     const [cart, setCart] = useCart(products);

     const handleRemoveFromOrders = () => {
          console.log();
     }

     return (
          <div className='shop-container'>
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

               <div className="cart-container">
                    <Cart cart={cart} />
               </div>
          </div>
     );
};

export default Orders;