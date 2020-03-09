import React from "react";
//styles
import './CustomerReviewsUnavailable.scss';
//elements
import CustomerChooses from "../../../Elements/CustomerChooses/CustomerChooses";
import Stars from "../../../Elements/Stars/Stars";
import { connect } from "react-redux";

const CustomerReviewsUnavailable = (props) => {
    return (
        <div className='customer_rewies_anavailable'>
            <h1>{props.customerReviewsUnavailable}</h1>
            <Stars size={64} />
            <CustomerChooses/>
        </div>
    );
}

const mapStateToProps = (state) => {
    return {
        customerReviewsUnavailable: state.otherpages.customerReviewsUnavailable
    }
}

export default connect(mapStateToProps)(CustomerReviewsUnavailable); 