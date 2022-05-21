import { faTrashAlt } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import './ReviewItem.css';

const ReviewItem = ({ pd, handleRemoveFromOrders }) => {
     const { id, img, name, price, shipping, quantity } = pd;
     return (
          <div className='review-item'>
               <div className="review-item-image">
                    <img src={img} alt="Loading..." />
               </div>

               <div className="review-item-details">
                    <h4>{name}</h4>
                    <p>Price: <span>${price}</span></p>
                    <p>Shipping Charge: <span>${shipping}</span></p>
                    <p>Quantity: <span>{quantity}</span></p>
               </div>

               <div className="remove-item-btn" onClick={() => handleRemoveFromOrders(id)}>
                    <FontAwesomeIcon icon={faTrashAlt} />
               </div>
          </div>
     );
};

export default ReviewItem;