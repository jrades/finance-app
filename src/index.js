import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import * as serviceWorker from './serviceWorker';
import 'bootstrap/dist/css/bootstrap.css';
import IncomeInputs from './Components/IncomeInputs';
import CreditCardInputs from './Components/CreditCardInputs';
import Header from './Components/Header';
import CalcButton from './Components/CalcButton';



ReactDOM.render( < Header / > , document.getElementById('header'));

ReactDOM.render( < IncomeInputs / > , document.getElementById('income'));

ReactDOM.render( < CreditCardInputs / > , document.getElementById('credit'));

ReactDOM.render( < CalcButton / > , document.getElementById('button'));


// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.register();