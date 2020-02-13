import React from "react";
import './HomeProducts.scss';
import Product from "../../Elements/Product/Product";

const HomeProducts = (props) => {
    return (
        <div className='home_wrap'>
            <h1>{props.title}</h1>
            <div className='items_list'>
                {
                    props.items.map((item, index) => {
                        return <Product key={index} item={item}/>
                    })
                }
            </div>
        </div>
    );
}

export default HomeProducts;