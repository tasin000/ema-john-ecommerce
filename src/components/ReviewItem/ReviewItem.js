import React from 'react';
import './ReviewItem.css';

const ReviewItem = ({pd}) => {
     const {name, price, shipping, quantity} = pd;
     return (
          <div>
               <h3>Review Item: {name}</h3>
          </div>
     );
};

export default ReviewItem;