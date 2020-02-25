import React from "react";
import './CategoryFilter.scss';

const CategoryFilter = (props) => {
    return(
        <div className='category_filter'>
            <h2>Categories</h2>
            {
                props.categories.map( (category, index) => {
                    return <p key={index}>{category}</p>
                })
            }
        </div>
    );
}

export default CategoryFilter;