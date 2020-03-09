import React, {useState} from "react";
import {Dropdown, Radio, Menu } from "antd";
import './LanguageChange.scss';
import { connect } from "react-redux";

const LanguageChange = (props) => {
    const {langs, currentLang} = props;
    const handleChange = e => {
        props.change(e.target.value)
    }
    const radioStyle = {
        display: 'block',
        height: '30px',
        lineHeight: '30px',
    };
    const menu = (
        <Menu>
            <div className='romb'></div>
            <Radio.Group onChange={handleChange} value={currentLang}>
                {
                    langs.map( (item, index) => {
                        return <Radio key={index} style={radioStyle} value={item.lang}>{item.name}</Radio>
                    })
                }
            </Radio.Group>
        </Menu>
    );
    return (
        <div className='language_change'>
            <Dropdown placement="bottomLeft" overlay={menu} trigger={['click']}>
                <a className="ant-dropdown-link" href="#">
                    {currentLang}
                </a>
            </Dropdown>
        </div>

    );
}

const mapStateToProps = (state) => {
    return {
        langs: state.changelanguage.langs,
        currentLang: state.changelanguage.currentLang
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        change: (id) => {dispatch({ type: 'CHANGE_LANGUAGE', payload: id})},
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(LanguageChange); 