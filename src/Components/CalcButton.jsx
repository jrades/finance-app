import React, { Component } from 'react';

class CalcButton extends Component {
  state = {};
  render() {
    return (
      <div className="calcButton">
        <p className="displayTotal" id="displayTotal" />
        <button
          onClick={this.showTotal}
          type="button"
          className="btn btn-primary"
          id="calcButton"
        >
          Calculate
        </button>
      </div>
    );
  }

  showTotal = () => {
    let income1 = Number(document.getElementById('incomeInput1').value);
    let income2 = Number(document.getElementById('incomeInput2').value);

    let creditCard1 = Number(document.getElementById('creditCard1').value);
    let creditCard2 = Number(document.getElementById('creditCard2').value);

    let total = income1 + income2 - creditCard1 - creditCard2;
    let displayTotal = document.getElementById('displayTotal');
    let x = (displayTotal.innerHTML = total);
    return x;
  };
}

export default CalcButton;
