import React from "react";
//styles
import './PurchaceSuccsesful.scss';
//elements
import PurchaseChooses from "../../../Elements/PurchaseChooses/PurchaseChooses";
//images
import success from '../../../Assets/svgs/success.svg';

const PurchaceSuccsesful  = () => {
    return(
        <div className='purchace_succsesful'>
            <img src={success} alt='success_icon' />
            <h1>Your order has been placed. Thank you for chosing element.</h1>
            <p>Your payment code is <span>164855547889BCRE</span></p>
            <PurchaseChooses/>
        </div>
    );
}

export default PurchaceSuccsesful;