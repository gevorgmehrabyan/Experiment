import React from "react";
import Rating from '@material-ui/lab/Rating';
import './Stars.scss';

const Stars = (props) => {
    return(
        <Rating  style={{fontSize: props.size}} name="half-rating" defaultValue={props.count} precision={0.5} />
    );
}

export default Stars;