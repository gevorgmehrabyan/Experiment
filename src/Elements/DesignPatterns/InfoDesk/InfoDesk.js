import React from "react";
import './InfoDesk.scss';

const InfoDesk = (props) => {
    return(
        <div className='info_desk' style={{marginTop: props.top}}>
            <h2>{props.name}</h2>
            {
                props.infos.map( (info, id) => {
                    return(
                        <div key={id}>
                            <p>{info.text1}</p>
                            <h5>{info.text2}</h5>
                        </div>
                    )
                })
            }
        </div>
    )
}

export default InfoDesk;