import React from "react";
import 'antd/dist/antd.css';
import './CategoryDropDown.scss';
import { Menu, Dropdown, Icon } from 'antd';

const menu = (
    <Menu>
        <Menu.Item key="0">For home</Menu.Item>
        <Menu.Item key="1">For automobiles</Menu.Item>
        <Menu.Item key="2">Electronics</Menu.Item>
        <Menu.Item key="3">For mobile</Menu.Item>
    </Menu>
);

const CategoryDropDown = (props) => {
    return (
        <Dropdown  overlay={menu} trigger={['click']}>
            <div className='category_dropdown'>
                <a className="ant-dropdown-link" href="#">
                    Categories <Icon type="caret-down" />
                </a>
            </div>
        </Dropdown>
    );
}

export default CategoryDropDown;

