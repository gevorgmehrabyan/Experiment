import React from "react";
import './FeedbackMessage.scss';
import Chooses from "../../../Elements/Chooses/Chooses";

const FeedbackMessage = () => {
    return(
        <div className='feedback_message'>
            <h1>Thank you for your feedback!</h1>
            <p>We appriciate that you spend your time to hel us improve our website.</p>
            <Chooses/>
        </div>
    );
}

export default FeedbackMessage;