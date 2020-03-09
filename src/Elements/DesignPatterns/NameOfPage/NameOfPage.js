import React from "react";
import './NameOfPage.scss';

const NameOfPage = (props) =>{
    return (
        <div className='name__of__page'>
            <div className='container'>
                <h1>{props.name}</h1>
            </div>
        </div>
    )
}

export default NameOfPage;