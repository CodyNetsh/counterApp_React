import React, { Component } from 'react';
// import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
// import AppBar from 'material-ui/AppBar';
// import RaisedButton from 'material-ui/RaisedButton';
// import TextField from 'material-ui/TextField';
// import axios from 'axios';
import styles from '../components/mystyle.module.css';

class Register extends Component {
    constructor(props){
        super(props)
    this.state = { loginImG: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSYAvt3cxFAL5PKpO6M8Nb1IJbI-RkpuDr8Ti_mr2lj-m3YSVpZ&s', }
    }
    render() { 
        return (
            <div className="base-container" ref={this.props.containerRef}>
            <div className="header">Register</div>
            <div className="content">
                <div className="image">
                    <img src={this.state.loginImG}/>
                </div>
                <div className="form">
                <div className="form-group">
                    <label htmlFor="username">UserName</label>
                    <input type="text" name="username" placeholder="User Name"/>
                </div>
                <div className="form-group">
                    <label htmlFor="username">Email</label>
                    <input type="text" name="email" placeholder="Email"/>
                </div>
                <div className="form-group">
                    <label htmlFor="username">Password</label>
                    <input type="text" name="password" placeholder="Password"/>
                </div>
                </div>
            </div>
            <div className="footer">
          <button type="button" className="btn">Register</button>
            </div>
        </div> 
        );
    }
}

export default Register;