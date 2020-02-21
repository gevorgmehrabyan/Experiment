import React from "react";
import './SmallHeader.scss'
import Logo from "../HeaderElements/Logo/Logo";

const SmallHeader = () => {
    return (
        <div className='small_header'>
            <div className='container'>
                <Logo/>
            </div>
        </div>
    );
}

export default SmallHeader;

//I prefer make another header us a  component , if  you prefer hide Elements
// ` Search, LanguageChange, CategoryDropDown, Car, Avatar in logical ways ..
// its up to you ...!!!