import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class GetInformation extends Component {
    state = {}
    render() {
        return (
            <div className="welcome">
                <div className="getInfo">
                    <label for="numOfIncomes">How many sources of income would you like to use</label>
                    <input type="number" id="numOfIncomes" />
                    <label for="numOfSpending">How many Credit/Debit cards do you use</label>
                    <input type="number" id="numOfSpending" />
                </div>
                <Link to="/Inputs" >Next</Link>

            </div>
        );
    }
    infoVars = () => {
        const numIncomes = Number(document.getElementById('#OfIncomes').value);
        const numSpending = Number(document.getElementById('#OfSpending').value);

    }

}

export default GetInformation;