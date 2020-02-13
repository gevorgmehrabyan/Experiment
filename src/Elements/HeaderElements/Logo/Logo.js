import React from "react";
import logo from '../../../Assets/images/logo.png';
import './Logo.scss';

const Logo = (props) => {
    return(
        <a href='#'>
            <img src={logo} alt={'logo'} />
        </a>
    )
}

export default Logo;