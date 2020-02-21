import React from "react";
import black_logo from "../../../Assets/images/black_logo.png";
import './ForgotPassword.scss';
import {Button} from "antd";
import TextField from "@material-ui/core/TextField";

const ForgotPassword = () => {
    let height = {
        height : window.innerHeight
    };
    return (
        <div className='background' style={height}>
            <div className='logo_cover'> <img src={black_logo} /></div>
            <div className='forgot_password'>
                <h1>Enter your email for this account</h1>
                <p>We'll email you a verification code you can enter here to create a new password.</p>
                <div className='mail_wraper'>
                    <TextField
                        id="standard-basic"
                        label="E-mail"
                        type='email'
                        className='inputStyle'
                    />
                    <span className='error_style'>required*</span>
                </div>
                <Button>Request Verification code </Button>
            </div>
        </div>
    )
}

export default ForgotPassword;