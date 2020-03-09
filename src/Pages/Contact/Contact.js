import React from "react";
//Style
import './Contact.scss';
//ELements
import Iframe from 'react-iframe'
//Redux
import { connect } from "react-redux";


const Contact = (props) => {
    const {officeInfo, contactFormInfo} = props ;
    return(
        <div className="contacts">
            <div className="contacts_container container">
                <div className="contacts_top">
                    <div className="contacts_top_left">
                        <h4>We are happy to hear from you</h4>
                        <h6>Via telephone</h6>
                        <div className="viber_wrap">
                            <img src={officeInfo.viberLogo} alt='viber_icon'/>
                            <p>{officeInfo.phone}</p>
                        </div>
                        <h6>Via email</h6>
                        <div className="mail_inline">
                            <img src={officeInfo.mailLogo} alt='mail_logo'/>
                            <p>{officeInfo.email}</p>
                        </div>
                    </div>
                    <div className="contacts_top_right">
                        <h6>Or just visit us</h6>
                        <div className="mail_inline">
                            <img src={officeInfo.locationLogo} alt='logo_location'/>
                            <p>{officeInfo.address}</p>
                        </div>
                        <Iframe url={officeInfo.url}
                                width="100%"
                                height="280px"
                        />
                    </div>
                </div>
                <div className="contacts_bottom">
                    <h4>Or just simply leave feedback</h4>
                    {
                        contactFormInfo.map( (item, index) => {
                            return (
                                <div key={index}>
                                    <h6>{item}</h6>
                                    <input/>
                                </div>
                            )
                        } )
                    }
                    <div>
                        <h6>Description</h6>
                        <textarea></textarea>
                        <p>(60 characters max)</p>
                    </div>
                    <button>Submit</button>
                </div>
            </div>
        </div>
    );
}

const mapStateToProps = (state) => {
    return {
        officeInfo: state.contact.officeInfo,
        contactFormInfo: state.contact.contactFormInfo
    }
}

const mapDispatchToProps = (dispatch) => {
    return {

    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Contact); 