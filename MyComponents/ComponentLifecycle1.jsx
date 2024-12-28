import React, { Component } from 'react';

export default class ComponentsLifecycle1 extends Component {
    constructor(props) {
        super(props);
        this.state = { count: 0 };
        this.increment = this.increment.bind(this);
        this.decrement = this.decrement.bind(this);
    }

    // Lifecycle method: Called just before the component is mounted
    componentWillMount() {
        console.log('Component Will MOUNT!');
    }

    // Lifecycle method: Called after the component is mounted
    componentDidMount() {
        console.log('Component Did MOUNT!');
    }

    
    // Method to increment the count
    increment() {
        this.setState((prevState) => ({ count: prevState.count + 1 }));
    }

    // Method to decrement the count
    decrement() {
        this.setState((prevState) => ({ count: prevState.count - 1 }));
    }

    // Lifecycle method: Called before receiving new props
    componentWillReceiveProps(newProps) {
        console.log('Component Will Receive Props!');
    }

    // Lifecycle method: Decides whether to update the component
    shouldComponentUpdate(newProps, newState) {
        return true; // Allow the update
    }

    // Lifecycle method: Called just before the component updates
    componentWillUpdate(nextProps, nextState) {
        console.log('Component Will UPDATE!');
    }

    // Lifecycle method: Called after the component updates
    componentDidUpdate(prevProps, prevState) {
        console.log('Component Did UPDATE!');
    }

    // Lifecycle method: Called just before the component unmounts
    componentWillUnmount() {
        console.log('Component Will UNMOUNT!');
    }

    render() {
        return (
            <div>
                <h1>Counter Component</h1>
                <h3>Count: {this.state.count}</h3>
                <button onClick={this.increment}>Increment</button>
                <button onClick={this.decrement}>Decrement</button>
            </div>
        );
    }
}