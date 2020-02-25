import React from "react";
import './Filters.scss';
import CategoryFilter from "./CategoryFilter/CategoryFilter";
import NameFilter from './NameFilter/NameFilter';
import PriceFilter from "./PriceFilter/PriceFilter";
import StarFilter from "./StarFilter/StarFilter";

const Filters = () => {
    const categories = ['For mobile', 'For home', 'Electronics', 'For cars'];
    const brands = ['Aiwa', 'Bang & Olufsen', 'Boss', 'Daewoo', 'Electrolux', 'Ericsson'];
    const models = ['A3', 'Aa2', 'B7', 'G87', 'M120', 'Vanquish'];
    return(
        <div className='filters_block'>
            <CategoryFilter categories={categories}/>
            <NameFilter name='Brand' filters={brands}/>
            <NameFilter name='Model' filters={models}/>
            <PriceFilter/>
            <StarFilter/>
        </div>
    );
}

export default Filters;