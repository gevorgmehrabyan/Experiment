import React from "react";
import './Product.scss';
import Stars from "../Stars/Stars";

const Product = (props) => {
    return (
        <div className='simple_product'>
            <img src={props.img} alt={props.name} />
            <h2>{props.name}</h2>
            <p>{props.describe}</p>
            <Stars size={16} count={props.stars}/>
            <div>
                <h3>{props.price}</h3>
                <span>{props.discount}</span>
            </div>
        </div>     
    );
}

export default Product;