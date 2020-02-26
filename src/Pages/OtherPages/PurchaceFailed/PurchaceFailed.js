import React from "react";
//styles
import './PurchaceFailed.scss';
//elements
import PurchaseChooses from "../../../Elements/PurchaseChooses/PurchaseChooses";
//images
import failed from '../../../Assets/svgs/failed.svg';

const PurchaceFailed = () => {
    return(
        <div className='purchace_failed'>
            <img src={failed} alt='failed' />
            <h1>Oops! Something went wrong</h1>
            <p>We couln’t be able to charge you money.
                Please ensure that your card is valid or check with your bank.</p>
            <PurchaseChooses/>
        </div>
    );
}

export default PurchaceFailed;