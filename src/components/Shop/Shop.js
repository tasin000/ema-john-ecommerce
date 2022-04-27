import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrashAlt } from '@fortawesome/free-solid-svg-icons';
import React, { useEffect, useState } from 'react';
import Product from '../Product/Product';
import './Shop.css';

const Shop = () => {
     const [products, setProducts] = useState([]);
     const [cart, setCart] = useState([]);
     const [totalPrice, setTotalPrice] = useState(0);
     const [grandTotal, setGrandTotal] = useState(0);

     useEffect(() => {
          fetch('products.json')
               .then(res => res.json())
               .then(data => setProducts(data))
     }, [])

     const handleAddToCart = product => { setCart([...cart, product]); setTotalPrice(product.price + totalPrice); setGrandTotal(totalPrice + shippingCharge + tax) };
     const clearCart = _ => setCart([])

     const shippingCharge = 5;
     const tax = 114;

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
                    <h2 className='cart-heading'>Order Review</h2>
                    <div className="whole-cart">
                         <div className="cart-info">
                              <p>Selected Items: {cart.length}</p>
                              <p>Total Price: ${totalPrice}</p>
                              <p>Total Shipping Charge: ${shippingCharge}</p>
                              <p>Tax: ${tax}</p>
                              <h3>Grand Total: ${grandTotal}</h3>
                         </div>

                         <div className="btn-group">
                              <button className="clear-cart-btn" onClick={clearCart}>
                                   Clear Cart
                                   <FontAwesomeIcon icon={faTrashAlt} />
                              </button>
                         </div>
                    </div>
               </div>
          </div>
     );
};

export default Shop;