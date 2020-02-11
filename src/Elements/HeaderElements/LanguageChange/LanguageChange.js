import React, {useState} from "react";
import {Dropdown, Radio, Menu } from "antd";
import './LanguageChange.scss';

const LanguageChange = (props) => {
    const [value , setValue] = useState(1);
    const onChange = e => {
        setValue(e.target.value)
    };
    const radioStyle = {
        display: 'block',
        height: '30px',
        lineHeight: '30px',
    };
    const menu = (
        <Menu>
            <div className='romb'></div>
            <Radio.Group onChange={onChange} value={value}>
                <Radio style={radioStyle} value={1}>
                    English
                </Radio>
                <Radio style={radioStyle} value={2}>
                    Russian
                </Radio>
                <Radio style={radioStyle} value={3}>
                    Armenian
                </Radio>
            </Radio.Group>
        </Menu>
    );
    return (
        <div className='language_change'>
            <Dropdown placement="bottomLeft" overlay={menu} trigger={['click']}>
                <a className="ant-dropdown-link" href="#">
                    EN
                </a>
            </Dropdown>
        </div>

    );
}

export default LanguageChange;