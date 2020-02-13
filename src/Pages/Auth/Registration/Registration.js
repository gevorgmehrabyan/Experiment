import React, {useState} from "react";
import './Registration.scss';
import black_logo from "../../../Assets/images/black_logo.png";
import TextField from "@material-ui/core/TextField";
import {Button, Radio } from "antd";

const Registration = (props) => {
    const [value , setValue] = useState(1)
    let height = {
        height : window.innerHeight
    };
    const change = (e) => {
        setValue(e.target.value)
    }
    return(
        <div className='background' style={height}>
            <form className='registration'>
                <div style={{width: '100%'}}> <img src={black_logo} /></div>
                <div className='choose_list'>
                    <h1>Registration</h1>
                    <p>If you have an account <a>log</a>  </p>
                    <h3>You are:</h3>
                    <Radio.Group onChange={change} value={value}>
                        <Radio value={1}>Male</Radio>
                        <Radio value={2}>Female</Radio>
                    </Radio.Group>
                </div>
                <TextField
                    id="standard-basic"
                    label="Email"
                    type='email'
                    className='input_style'
                />
                <TextField
                    id="standard-basic"
                    label="First name"
                    type='text'
                    className='input_style'
                />
                <TextField
                    id="standard-basic"
                    label="Last name"
                    type='text'
                    className='input_style'
                />
                <TextField
                    id="standard-basic"
                    label="Password"
                    type='password'
                    className='input_style'
                />
                <TextField
                    id="standard-basic"
                    label="Confirm password"
                    type='password'
                    className='input_style'
                />
                <TextField
                    id="standard-basic"
                    label="Phone number"
                    className='input_style'
                />
                <Button className='btn_style'>Register</Button>
            </form>
        </div>
    );
}

export default Registration;