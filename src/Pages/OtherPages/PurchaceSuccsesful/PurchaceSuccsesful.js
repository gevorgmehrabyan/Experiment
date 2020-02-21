import React from "react";
import './PurchaceSuccsesful.scss';
import Chooses from "../../../Elements/Chooses/Chooses";
import success from '../../../Assets/svgs/success.svg';

const PurchaceSuccsesful  = () => {
    return(
        <div className='purchace_succsesful'>
            <img src={success} alt='success_icon' />
            <h1>Your order has been placed. Thank you for chosing element.</h1>
            <p>Your payment code is <span>164855547889BCRE</span></p>
            <Chooses/>
        </div>
    );
}

export default PurchaceSuccsesful;