import React from "react";
//styles
import './Footer.scss';
//elements
import Socials from "../../Elements/FooterElements/Socials/Socials";
import Blocks from "../../Elements/FooterElements/Blocks/Blocks";
import Partners from "../../Elements/FooterElements/Partners/Partners";
import Created from "../../Elements/FooterElements/Created/Created";

const Footer = () => {
    return(
        <div className='footer'>
            <Socials/>
            <div className='container'>
                <div className='main_footer'>
                    <Blocks/>
                    <Partners/>
                    <hr />
                    <Created/>
                </div>
            </div>
        </div>
    );
}

export default Footer;