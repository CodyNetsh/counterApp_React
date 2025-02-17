import Register from './register';
import Login from './login';
import React, { Component } from 'react';
import styles from '../components/mystyle.module.css';

class LoginIndex extends Component {
    constructor(props){
        super(props)
  this.state = {  
      isLoginActive: true
  };
}

changeState(){
    const { isLoginActive } = this.state;
    if(isLoginActive){
        this.rightSide.classList.remove("right");
        this.rightSide.classList.add("left");
    } else{
        this.rightSide.classList.remove("left");
        this.rightSide.classList.add("right");
    }
    this.setState(prevState => ({isLoginActive: !prevState.isLoginActive}))
}

    render() { 
        const { isLoginActive } = this.state;
        const current = isLoginActive ? "Sign In" : "Already Signin";
        const currentActive = isLoginActive ? "Login" : "Register";

        return ( 
            <div className="App">
                            <div className="login">
                            <div className="container">

                            {isLoginActive &&  (
                            <Login containerRef ={(ref) =>this.current = ref}/>)}
                            {!isLoginActive &&  (
                            <Register containerRef ={(ref) =>this.current = ref}/>)}
            </div>
            <RightSide current={current} containerRef={ref => this.rightSide = ref} onClick={this.changeState.bind(this)}/>
            </div>
            </div>
         );
    }
}
 const RightSide = props => {
return <div className="right-side" ref={props.containerRef} onClick={props.onClick}>
<div className="inner-container">
<div className="text">{props.current}</div>
</div>
     </div>
 }

export default LoginIndex;
