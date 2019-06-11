import React, { Component } from 'react';

class CreditCardInputs extends Component {
  state = {};
  render() {
    return (
      <div className="creditCardDiv">
        <div className="input-group p-3">
          <div className="input-group-prepend">
            <span className="input-group-text" id="basic-addon1">
              Credit Card 1: $
            </span>
          </div>
          <input type="text" className="form-control" id="creditCard1" />
          <div className="input-group-prepend">
            <span className="input-group-text" id="basic-addon1">
              Credit Card 2: $
            </span>
          </div>
          <input type="text" className="form-control" id="creditCard2" />
        </div>
      </div>
    );
  }
}

export default CreditCardInputs;
