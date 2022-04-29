import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCartPlus } from '@fortawesome/free-solid-svg-icons';
import React from 'react';
import './Product.css';

const Product = ({pd, handleAddToCart}) => {
     const {img, name, price, seller, ratings} = pd;

     return (
          <div className='product-card'>
               <img src={img} alt="Loading..." />

               <div className="product-info">
                    <h3>{name}</h3>
                    <p>Price: ${price}</p>
                    <p><small>Manufacturer: {seller}</small></p>
                    <p><small>Ratings: {ratings} stars</small></p>
               </div>

               <button className='cart-btn' onClick={() => handleAddToCart(pd)}>
                    Add to Cart
                    <FontAwesomeIcon icon={faCartPlus} />
               </button>
          </div>
     );
};

export default Product;