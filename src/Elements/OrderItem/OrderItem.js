import React from "react";
import './OrderItem.scss';

const OrderItem = (props) => {
    const {image, name, count, orderDate, delDate, available} = props.item;
    return(
        <div className='order__list__item'>
           <div className='name__description'>
               <img src={image} alt='order'/>
               <div className='name__div'>
                   <p>{name}</p>
                   <a>View order details</a>
               </div>
           </div>
            <div className='column__div'>
                <span>Qty.</span>
                <h2>{count}</h2>
            </div>
            <div className='name__description'>
                <div className='column__div'>
                    <span>Order Date:</span>
                    <h2>{orderDate}</h2>
                    <span>Delivery Date:</span>
                    <h2>{delDate}</h2>
                </div>
                <div className='column__div'>
                    <button>Write a review</button>
                    <button>Buy it again</button>
                    {
                        ( available) &&  <span className='not__available'>Currently unavailable</span>
                    }
                </div>
            </div>
        </div>
    )
}

export default OrderItem;