import React from 'react';
import CounterErrorBoundary from './CounterErrorBoundary';

class BuggyCounter extends React.Component {
  state = {
    counter: 0,
  };

  handleClick = () => {
    this.setState({
      counter: this.state.counter + 1,
    });
  };

  render() {
    if (this.state.counter === 5) {
      throw new Error('Я упал!');
    }

    return (
      <div>
        <h1>{this.state.counter}</h1>
        <button onClick={this.handleClick}>+</button>
      </div>
    );
  }
}

export default BuggyCounter;
