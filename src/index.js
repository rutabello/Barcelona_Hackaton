import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import BigBoard from './App';
import * as serviceWorker from './serviceWorker';
import 'bootstrap/dist/css/bootstrap.min.css';
import {BrowserRouter} from 'react-router-dom'

<<<<<<< HEAD

ReactDOM.render(<BigBoard />, document.getElementById('root'));
=======
ReactDOM.render(<BrowserRouter><App />
</BrowserRouter>, document.getElementById('root'));
>>>>>>> 664045d422373d4791591cf4a32855e9293f19c3

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
