import React from "react";
//styles
import './CustomerReviewsAnavailable.scss';
//elements
import CustomerChooses from "../../../Elements/CustomerChooses/CustomerChooses";
import Stars from "../../../Elements/Stars/Stars";

const CustomerReviewsAnavailable = () => {
    return (
        <div className='customer_rewies_anavailable'>
            <h1>We apologize, but to provide the best content to our users,
                we require that a reviewer purchase an item.</h1>
            <Stars size={64} />
            <CustomerChooses/>
        </div>
    );
}

export default CustomerReviewsAnavailable;