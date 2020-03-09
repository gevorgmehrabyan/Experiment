import React from "react";
import './LeftSideText.scss'

const LeftSideText = (props) => {
    return (
        <div className="left_pic_wrap">
            <img src={props.img}/>
            <div>{props.text}</div>
        </div>
    )
}

export default LeftSideText;