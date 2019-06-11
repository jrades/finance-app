import React, { Component } from 'react';

class Header extends Component {
  state = {};

  render() {
    return (
      <div className="header">
        <img
          src={require('/Users/Jordan/electron_projects/FinanceApp/finance-app/src/Images/FinanceApp.png')}
          alt="logo"
        />
      </div>
    );
  }
}

export default Header;
