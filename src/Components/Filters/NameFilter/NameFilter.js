import React from "react";
import './NameFilter.scss';
import { Checkbox } from 'antd';

const Filter = (props) => {
    return(
        <div className='filter_list'>
            <h2>{props.name}</h2>
            {
                props.filters.map( (filter, index) => {
                    return(
                        <div className='simple_filter'>
                            <Checkbox key={index}>{filter}</Checkbox>
                        </div>
                    )
                })
            }
            <p>● ● ●</p>
        </div>
    );
}

export default Filter;