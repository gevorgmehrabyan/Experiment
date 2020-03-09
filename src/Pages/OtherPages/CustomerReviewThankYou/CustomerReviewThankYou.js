import React from "react";
//styles
import './CustomerReviewThankYou.scss';
//elements
import CustomerChooses from "../../../Elements/CustomerChooses/CustomerChooses";
import { connect } from "react-redux";

const CustomerReviewsThankYou = (props) => {
    return (
        <div className='customer_rewies_thank_you'>
            <h1>{props.customerReviewsThankYou}</h1>
            <CustomerChooses/>
        </div>
    );
}

const mapStateToProps = (state) => {
    return {
        customerReviewsThankYou: state.otherpages.customerReviewsThankYou
    }
}

export default connect(mapStateToProps)(CustomerReviewsThankYou); 