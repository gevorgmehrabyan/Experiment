import React from "react";
import './WorkForm.scss';

const WorkForm = (props) => {
    return(
        <div className='work_description'>
            <div className='job__description'>
                {
                    props.jobDescription.map((item, index) => {
                        return (
                            <div key={index}>
                                <h3>{item.title}</h3>
                                <p>{item.subtitle}</p>
                            </div>
                        )
                    })
                }
            </div>
            <div className='responsibility'>
                <h1>Your responsibilities</h1>
                <p>{props.responsibility}</p>
            </div>
            <div className='required__qualifications'>
                <h1>Required qualifications</h1>
                {
                    props.requiresQualify.map((item, index) => {
                        return (
                            <p key={index}>• &nbsp; {item}</p>
                        )
                    })
                }
            </div>
            <button>Apply</button>
        </div>
    )
}

export default WorkForm;