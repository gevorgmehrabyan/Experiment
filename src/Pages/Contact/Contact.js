import React from "react";
import './Contact.scss';
import viber from '../../Assets/svgs/viber.svg';
import mail from '../../Assets/svgs/mail.svg';
import location from '../../Assets/svgs/location.svg';
import Iframe from 'react-iframe'


const Contact = () => {
    return(
        <div className="contacts">
            <div className="contacts_container container">
                <div className="contacts_top">
                    <div className="contacts_top_left">
                        <h4>We are happy to hear from you</h4>
                        <h6>Via telephone</h6>
                        <div className="viber_wrap">
                            <img src={viber} alt='viber_icon'/>
                            <p>+374 99 10 11 112</p>
                        </div>
                        <h6>Via email</h6>
                        <div className="mail_inline">
                            <img src={mail} alt='mail_logo'/>
                            <p>somemail@somemail.am</p>
                        </div>
                    </div>
                    <div className="contacts_top_right">
                        <h6>Or just visit us</h6>
                        <div className="mail_inline">
                            <img src={location} alt='logo_location'/>
                            <p>somestreet 11 some apt 62, Yerevan, Armenia</p>
                        </div>
                        <Iframe url="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3049.1058833690577!2d44.50492585113653!3d40.162196179294355!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x406abc69d5b73add%3A0xfc942ac942a9c34e!2z0J_QtdGC0LDQug!5e0!3m2!1sru!2s!4v1571900383767!5m2!1sru!2s"
                                width="100%"
                                height="280px"
                        />

                    </div>
                </div>
                <div className="contacts_bottom">
                    <h4>Or just simply leave feedback</h4>
                    <div>
                        <h6>First Name</h6>
                        <input/>
                    </div>
                    <div>
                        <h6>Last Name</h6>
                        <input/>
                    </div>
                    <div>
                        <h6>Email</h6>
                        <input/>
                    </div>
                    <div>
                        <h6>Subject</h6>
                        <input/>
                    </div>
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

export default Contact;