import React from "react";
import 'antd/dist/antd.css';
import './Avatar.scss';
import { Menu, Dropdown } from 'antd';
import user_icon from '../../../Assets/svgs/user_icon.svg';
import order from '../../../Assets/svgs/order.svg';
import sign_in from '../../../Assets/svgs/sign_in.svg';
import account from '../../../Assets/svgs/account.svg';
import gift_card from '../../../Assets/svgs/gift_card.svg';

const menu = (
    <Menu style={{width: '256px'}}>
        <div className='romb1'></div>
        <h2 className='title'>ACCOUNT</h2>
        <Menu.Item key="0">
            <div className='avatar_drop_categ'>
                <img src={sign_in} alt='sign_in' />
                <span>Sign in</span>
            </div>
        </Menu.Item>
        <Menu.Item key="1">
            <div className='avatar_drop_categ'>
                <img src={account} alt='account' />
                <span>Create account</span>
            </div>
        </Menu.Item>
        <Menu.Divider />
        <Menu.Item key="2">
            <div className='avatar_drop_categ'>
                <img src={gift_card} alt='gift_card' />
                <span>Gift cards</span>
            </div>
        </Menu.Item>
        <Menu.Item key="3">
            <div className='avatar_drop_categ'>
                <img src={order} alt='order' />
                <span>Your orders</span>
            </div>
        </Menu.Item>
    </Menu>
);

const Avatar = (props) => {
    return (
        <Dropdown placement="bottomRight"  overlay={menu} trigger={['click']}>
            <div className='avatar_dropdown'>
                <a className="ant-dropdown-link" href="#/">
                    <img src={user_icon} alt={'avatar'} />
                </a>
            </div>
        </Dropdown>
    );
}

export default Avatar;

