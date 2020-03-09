import React from "react";
//styles
import './PurchaseFailed.scss';
//elements
import PurchaseChooses from "../../../Elements/PurchaseChooses/PurchaseChooses";
//Redux
import { connect } from "react-redux";

const PurchaseFailed = (props) => {
    const {purchaseFailed}  = props;
    return(
        <div className='purchace_failed'>
            <img src={purchaseFailed.image} alt='failed' />
            <h1>{purchaseFailed.wrong}</h1>
            <p>{purchaseFailed.help}</p>
            <PurchaseChooses/>
        </div>
    );
}

const mapStateToProps = (state) => {
    return {
        purchaseFailed: state.otherpages.purchaseFailed
    }
}

export default connect(mapStateToProps)(PurchaseFailed); 