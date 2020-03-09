import React from "react";
import './RightSideText.scss';

const RightSideText = (props) => {
    return (
        <div className="right_pic_wrap">
            <img src={props.img} />
            <div>{props.text}</div>
        </div>
    )
}

export default RightSideText;