import React, { Component } from 'react';

class IncomeInputs extends Component {
  state = {
    count: 0
  };

  render() {
    return (
      <div className="incomeInputsDiv">
        <div className="input-group p-3">
          <div className="input-group-prepend">
            <span className="input-group-text " id="basic-addon1">
              Income 1: $
            </span>
          </div>
          <input type="text" className="form-control" id="incomeInput1" />
          <div className="input-group-prepend">
            <span className="input-group-text" id="basic-addon1">
              Income 2: $
            </span>
          </div>
          <input type="text" className="form-control" id="incomeInput2" />
        </div>
      </div>
    );
  }

  createIncomeInput() {}
}

export default IncomeInputs;
