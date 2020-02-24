import React from "react";
import './HomeProducts.scss';
import HomeProduct from "../../Elements/HomeProduct/HomeProduct";

const HomeProducts = (props) => {
    return (
        <div className='home_wrap'>
            <h1>{props.title}</h1>
            <div className='items_list'>
                {
                    props.items.map((item, index) => {
                        return <HomeProduct key={index} item={item}/>
                    })
                }
            </div>
        </div>
    );
}

export default HomeProducts;