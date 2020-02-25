import React from "react";
import './StarFilter.scss';
import {Checkbox} from "antd";
import Stars from "../../../Elements/Stars/Stars";

const StarFilter = () => {
    const counts = [4,3,2,1];
    return(
        <div className='filter_rating_list'>
            <h2>Customer Ratings</h2>
            {
                counts.map( (count, index) => {
                    return(
                        <div className='simple_rate_filter'>
                            <Checkbox key={index}>
                                <Stars size={16} count={count}/>
                                &nbsp; & Up
                            </Checkbox>
                        </div>
                    )
                })
            }
        </div>
    );
}

export default StarFilter;