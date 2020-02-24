import React from "react";
import './HomeProduct.scss';

const HomeProduct = (props) => {
    return (
        <div className='slide_item'>
            <img src={props.item.image} className="slider" alt={props.item.name}/>
            <p>{props.item.name}</p>
            <h3>{props.item.price}</h3>
        </div>
    );
}

export default HomeProduct;