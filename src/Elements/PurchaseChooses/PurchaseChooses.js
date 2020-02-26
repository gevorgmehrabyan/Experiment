import React from "react";
import './PurchaseChooses.scss';

const PurchaseChooses = (props) => {
    return(
        <div className='feedback_message__list'>
            <a href='#'>Check our latest products</a>
            <a href='#'>Top rated products are waiting for you</a>
            <a href='#'>View your latest orders</a>
        </div>
    );
}

export default PurchaseChooses;