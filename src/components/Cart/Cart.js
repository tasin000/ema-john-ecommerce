import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrashAlt } from '@fortawesome/free-solid-svg-icons';
import React from 'react';
import './Cart.css';

const Cart = ({ cart, clearCart }) => {
     let total = 0;
     let shipping = 0;
     for (const product of cart) {
          total += product.price;
          shipping += product.shipping;
     }

     const tax = Number((total * 0.1).toFixed(2));

     const grandTotal = total + shipping + tax;

     return (
          <div className='cart'>
               <h2 className='cart-heading'>Order Review</h2>
               <div className="whole-cart">
                    <div className="cart-info">
                         <p>Selected Items: {cart.length}</p>
                         <p>Total Price: ${total}</p>
                         <p>Total Shipping Charge: ${shipping}</p>
                         <p>Tax: ${tax}</p>
                         <h3>Grand Total: ${grandTotal.toFixed(2)}</h3>
                    </div>

                    <div className="btn-group">
                         <button className="clear-cart-btn" onClick={clearCart}>
                              Clear Cart
                              <FontAwesomeIcon icon={faTrashAlt} />
                         </button>
                    </div>
               </div>
          </div>
     );
};

export default Cart;