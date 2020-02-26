import React from "react";
import './Product.scss';
import Stars from "../Stars/Stars";

const Product = (props) => {
    return (
        <div className='simple_product'>
            <img src={props.item.img} alt={props.item.name} />
            <h2>{props.item.name}</h2>
            <p>{props.item.describe}</p>
            <div className='stars_wrapper'>
                <Stars size={16} count={props.item.count}/>
                <p>{props.item.rewcount}</p>
            </div>
            <div className='price_wrapper'>
                <h3>${props.item.price}</h3>
                <span>${props.item.discount}</span>
            </div>
        </div>     
    );
}

export default Product;