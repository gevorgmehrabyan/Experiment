import React from "react";
import './Cart.scss';
import cart_icon from '../../../Assets/svgs/cart_icon.svg';

const Cart = () =>  {
    let isAdd = false;
    return (
        <div className='cart_icon'>
            {(isAdd) && <span>5</span>}
            <img src={cart_icon} alt='cart' />
        </div>
    );
}

export default Cart;