import React, { Component } from 'react';
import { Link } from 'react-router-dom';


const Welcome = () => {
    return (
        <div className="welcome">
            <p>Welcome to my financeApp, how I track month to month spending and income. This simple method is great if you don't like keeping track of detailed spending, but rather whether or not you are making your goals.</p>
            <p>On the next page, I will get some information from you regarding income and spending</p>
            <Link to="/GetInformation" >Next</Link>
        </div>
    );
}


export default Welcome;