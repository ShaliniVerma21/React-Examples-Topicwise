import React from 'react';
import PropTypes from 'prop-types';

class Counter extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      count: props.initialCount,
    };
  }

  handleClick = () => {
    this.setState({ count: this.state.count + 1 });
  }

  handleReset = () => {
    this.setState({ count: this.props.initialCount });
  }

  render() {
    return (
      <div>
        <p>Count: {this.state.count}</p>
        <button onClick={this.handleClick}>Increment</button>
        <button onClick={this.handleReset}>Reset</button>
      </div>
    );
  }
}

Counter.propTypes = {
  initialCount: PropTypes.number.isRequired,
};

export default Counter;