import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import 'bootstrap/dist/css/bootstrap.css';
// import Counter from './components/counter';
import Counted from './components/counted';

// ReactDOM.render(<Counter />, document.getElementById('root'));
//composing components
ReactDOM.render(<Counted />, document.getElementById('root'));

serviceWorker.unregister();
