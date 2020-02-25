import React from "react";
import {Select, Icon} from 'antd';
import './SortBy.scss'

const {Option} = Select;

const SortBy = () => {
    return (
        <Select defaultValue='sort by:' style={{width: 120}}>
            <Option value="Featured">Featured</Option>
            <Option value="Price: low to high">Price: low to high</Option>
            <Option value="Price: high to low">Price: high to low</Option>
            <Option value="Avg. cutomer review">Avg. cutomer review</Option>
            <Option value="Newest arrival">Newest arrival</Option>
        </Select>
    );
}

export default SortBy;