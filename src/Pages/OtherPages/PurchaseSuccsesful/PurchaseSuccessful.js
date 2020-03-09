import React from "react";
//styles
import './PurchaseSuccessful.scss';
//elements
import PurchaseChooses from "../../../Elements/PurchaseChooses/PurchaseChooses";
import { connect } from "react-redux";

const PurchaseSuccessful  = (props) => {
    const {purchaseSuccessful} = props;
    return(
        <div className='purchace_succsesful'>
            <img src={purchaseSuccessful.image} alt='success_icon' />
            <h1>{purchaseSuccessful.success}</h1>
            <p>Your payment code is <span>{purchaseSuccessful.code}</span></p>
            <PurchaseChooses/>
        </div>
    );
}

const mapStateToProps = (state) => {
    return {
        purchaseSuccessful: state.otherpages.purchaseSuccessful
    }
}

export default connect(mapStateToProps)(PurchaseSuccessful);