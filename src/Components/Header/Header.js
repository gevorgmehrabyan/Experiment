import React from "react";
import './Header.scss';
import Logo from "../../Elements/HeaderElements/Logo/Logo";
import CategoryDropDown from "../../Elements/HeaderElements/CategoryDropDown/CategoryDropDown";
import LanguageChange from "../../Elements/HeaderElements/LanguageChange/LanguageChange";
import Avatar from "../../Elements/HeaderElements/Avatar/Avatar";
import Cart from "../../Elements/HeaderElements/Cart/Cart";
import SearchInput from "../../Elements/HeaderElements/SearchInput/SearchInput";

const Header = () => {
    return (
        <div className='header'>
           <div className='container'>
               <div className='header_wrap'>
                   <Logo/>
                   <div className='inline'>
                       <CategoryDropDown/>
                       <SearchInput/>
                   </div>
                   <div className='lang_bar'>
                       <LanguageChange/>
                       <hr />
                       <Avatar/>
                       <hr />
                       <Cart/>
                   </div>
               </div>
           </div>
        </div>
    );
}

export default Header;