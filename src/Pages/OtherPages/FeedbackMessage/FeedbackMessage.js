import React from "react";
//styles
import './FeedbackMessage.scss';
//elements
import PurchaseChooses from "../../../Elements/PurchaseChooses/PurchaseChooses";
import { connect } from "react-redux";

const FeedbackMessage = (props) => {
    return(
        <div className='feedback_message'>
            <h1>Thank you for your feedback!</h1>
            <p>{props.feedbackMessage}</p>
            <PurchaseChooses/>
        </div>
    );
}

const mapStateToProps = (state) => {
    return {
        feedbackMessage: state.otherpages.feedbackMessage
    }
}

export default connect(mapStateToProps)(FeedbackMessage); 