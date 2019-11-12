import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import 'bootstrap/dist/css/bootstrap.css';
// import Counter from './components/counter';
// import Counted from './components/counted';
import  Register  from './components/register';
import  Login  from './components/login';
import LoginIndex from './components/loginindex'
// ReactDOM.render(<Counter />, document.getElementById('root'));
//composing components
// ReactDOM.render(<Counted />, document.getElementById('root'));
ReactDOM.render(<LoginIndex />, document.getElementById('root'));

serviceWorker.unregister();
