import React from "react";
//styles
import './CustomerReviewThankYou.scss';
//elements
import CustomerChooses from "../../../Elements/CustomerChooses/CustomerChooses";

const CustomerReviewsThankYou = () => {
    return (
        <div className='customer_rewies_thank_you'>
            <h1>Thank you for Your review.
                We appriciate that you’ve spent time to help us as well as our customers.</h1>
            <CustomerChooses/>
        </div>
    );
}

export default CustomerReviewsThankYou;