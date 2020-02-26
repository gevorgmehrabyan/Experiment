import React from "react";
//styles
import './FeedbackMessage.scss';
//elements
import PurchaseChooses from "../../../Elements/PurchaseChooses/PurchaseChooses";

const FeedbackMessage = () => {
    return(
        <div className='feedback_message'>
            <h1>Thank you for your feedback!</h1>
            <p>We appriciate that you spend your time to hel us improve our website.</p>
            <PurchaseChooses/>
        </div>
    );
}

export default FeedbackMessage;