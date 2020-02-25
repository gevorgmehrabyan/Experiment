import React from "react";
import './PriceFilter.scss';

const PriceFilter = () => {
    return(
        <div className='price_filter'>
            <h2>Price</h2>
            <input placeholder='Min price AMD'/>
            <input placeholder='Max price AMD' />
            <span>Go</span>
        </div>
    );
}

export default PriceFilter;