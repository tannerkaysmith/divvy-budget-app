import React, { Component } from 'react';
import './Main.css';

class Main extends Component {
  constructor() {
    super()
    this.state = {
      budgetsArray: [
        { Name: 'Name', Allowed: 50000, Used: 15000, Remaining: (function() {return this.Allowed - this.Used}) },
        { Name: 'Poop', Allowed: 100, Used: 50, Remaining: 50 }
      ]
    }
  }

  render() {

    var budgetsToDisplay = this.state.budgetsArray.map((val, i) => {
      return (
        <a><div key={i} className='budget-line'>
          <p>Name: {val.Name}</p>
          <p>Allowed: {val.Allowed}</p>
          <p>Used: {val.Used}</p>
          <p>Remaining: {val.Remaining}</p>
        </div></a>
      )
    })

    return (
      <div className="Main">

        <h1 className="budgets">Budgets</h1>

        {budgetsToDisplay}

      </div>
    );
  }
}

export default Main;