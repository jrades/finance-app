import React, { Component } from 'react';
import _ from 'lodash';
import { Link } from 'react-router-dom'

const Inputs = () => {
    const IncomeInputs = () => {
        const incomeCount = document.getElementById('numOfIncomes').value;
        console.log(incomeCount);
        const income = _.range(0, incomeCount)
        return (
            <div>
                {income.map(income => (<div className="incomeInputsDiv">
                    <div className="input-group p-3">
                        <div className="input-group-prepend">
                            <span className="input-group-text " id="basic-addon1">
                                Income 1: $
                            </span>
                            <input type="text" className="form-control" id="incomeInput" />
                        </div>
                    </div>
                </div>))}
            </div>);
    }

    const CreditInputs = () => {
        const creditCount = document.getElementById('numOfSpending').value;
        const credit = _.range(0, creditCount);
        return (
            <div>
                {credit.map(credit => (<div className="creditCardDiv">
                    <div className="input-group p-3">
                        <div className="input-group-prepend">
                            <span className="input-group-text " id="basic-addon1">
                                Credit Card 1: $
                            </span>
                            <input type="text" className="form-control" id="creditCard" />
                        </div>
                    </div>
                </div>))}
            </div>);
    }
    return (
        <div>
            <div>
                {IncomeInputs()}
            </div>
            <div>
                {CreditInputs()}
            </div>
            <Link to="/GetInformation" >Back</Link>
        </div>
    )

}



export default Inputs;