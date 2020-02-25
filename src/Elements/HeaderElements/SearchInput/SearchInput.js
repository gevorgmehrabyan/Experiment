import React from "react"
import './SearchInput.scss';
import { Input } from 'antd';

const { Search } = Input;

const SearchInput = (props) => {
    return (
        <Search
            placeholder="Search"
            onSearch={value => console.log(value)}
            className={'search_input'}
        />
    );
}

export default SearchInput;