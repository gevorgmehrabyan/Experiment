import React from "react";
import black_logo from "../../../Assets/images/black_logo.png";
import './ForgotpasswordVerify.scss';
import {Button} from "antd";
import TextField from "@material-ui/core/TextField";

const ForgotPasswordVerify = () => {
    let height = {
        height : window.innerHeight
    };
    return (
        <div className='background' style={height}>
            <div className='logo_cover'> <img src={black_logo} /></div>
            <div className='forgot_password_verify'>
                <h1>Enter your email for this account</h1>
                <span>user@somemail.som</span>
                <p>We'll email you a verification code you can enter here to create a new password.</p>
                <a href='#'>Request a new one</a>
                <div className='mail_wraper'>
                    <TextField
                        id="standard-basic"
                        label="Enter Verification code"
                        type='text'
                        className='inputStyle'
                    />
                    <span className='error_style'>required*</span>
                </div>
                <div className='mail_wraper'>
                    <TextField
                        id="standard-basic"
                        label="Create a New Password"
                        type='password'
                        className='inputStyle'
                    />
                    <span className='error_style'>required*</span>
                </div>
                <Button>Submit</Button>
            </div>
        </div>
    )
}

export default ForgotPasswordVerify;