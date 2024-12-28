import React, { Component } from 'react';

export default class ComponentsLifecycle extends Component {
    constructor(props) {
        super(props);
        this.state = { hello: "Welcome to Develearn!!!!", count: 0 };
        this.changeState = this.changeState.bind(this);
        this.incrementCount = this.incrementCount.bind(this);
    }

    // Lifecycle method: Called just before the component is mounted
    componentWillMount() {
        console.log('Component Will MOUNT!');
    }

    // Lifecycle method: Called after the component is mounted
    componentDidMount() {
        console.log('Component Did MOUNT!');
    }

    // Method to change the state
    changeState() {
        this.setState({ hello: "All!!- It's a great ReactJS tutorial." });
    }

    // Method to increment the count
    incrementCount() {
        this.setState((prevState) => ({ count: prevState.count + 1 }));
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
                <h1>ReactJS Component's Lifecycle</h1>
                <h3>Hello: {this.state.hello}</h3>
                <button onClick={this.changeState}>Change Greeting</button>
                <h4>Count: {this.state.count}</h4>
                <button onClick={this.incrementCount}>Increment Count</button>
            </div>
        );
    }
}