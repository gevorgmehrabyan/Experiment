import React from "react";
//styles
import './Login.scss';
import TextField from '@material-ui/core/TextField';
import { Checkbox, Button } from 'antd';
//images
import black_logo from '../../../Assets/images/black_logo.png';
import google from '../../../Assets/svgs/google.svg';
import facebook_logo from '../../../Assets/svgs/facebook_logo.svg';

const Login = (props) => {
    let height = {
        height : window.innerHeight
    };
    return (
        <div className='background' style={height}>
            <form className='login'>
                <div style={{width: '100%'}}> <img src={black_logo} /></div>
                <h3>Log in or <a href='#'>Create an account</a></h3>
                <TextField
                    id="standard-basic"
                    label="Email"
                    type='email'
                    className='inputStyle'
                />
                <TextField
                    id="standard-basic"
                    label="Password"
                    type='password'
                    className='inputStyle'
                />
                <Checkbox className='check'>Remember me</Checkbox>
                <Button className='btn_submit'>SUBMIT</Button>
                <a className='forgot_pass'>Forgot password?</a>
                <span className='login_via'>Or Login via</span>
                <div className='logos_div'>
                    <a><img src={google} alt='google' /></a>
                    <a><img src={facebook_logo} alt='facebook_logo' /></a>
                </div>
            </form>
        </div>
    );
}

export default Login;