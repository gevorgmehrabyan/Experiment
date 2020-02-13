import React from "react";
import './AccountConfirmation.scss';
import black_logo from "../../../Assets/images/black_logo.png";
import {Button} from "antd";

const AccountConfirmation = (props) => {
    let height = {
        height : window.innerHeight
    };
    return (
        <div className='background' style={height}>
            <div className='account_confirmation'>
                <div style={{width: '100%'}}> <img src={black_logo} /></div>
                <h1>Almost done!</h1>
                <p>
                    We need to confirm your email address. To complete the process, please click the link in the email we just sent you.
                </p>
                <Button>Confirm email</Button>
            </div>
        </div>
    );
}
export default AccountConfirmation;