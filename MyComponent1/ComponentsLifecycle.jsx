 import React, { Component } from 'react'
 
 export default class ComponentsLifecycle extends Component {
    constructor(props) {  
        super(props);  
        this.state = {hello: "Welcome to Develearn!!!!"};  
        this.changeState = this.changeState.bind(this)  
     }    
     render() {  
        return (  
           <div>  
               <h1>ReactJS component's Lifecycle</h1>  
               <h3>Hello {this.state.hello}</h3>  
               <button onClick = {this.changeState}>Click Here!</button>          
           </div>  
        );  
     }  
     componentWillMount() {  
        console.log('Component Will MOUNT!')  
     }  
     componentDidMount() {  
        console.log('Component Did MOUNT!')  
     }  
     changeState(){  
        this.setState({hello:"All!!- Its a great reactjs tutorial."});  
     }  
     componentWillReceiveProps(newProps) {      
        console.log('Component Will Recieve Props!')  
     }  
     shouldComponentUpdate(newProps, newState) {  
        return true;  
     }  
     componentWillUpdate(nextProps, nextState) {  
        console.log('Component Will UPDATE!');  
     }  
     componentDidUpdate(prevProps, prevState) {  
        console.log('Component Did UPDATE!')  
     }  
     componentWillUnmount() {  
        console.log('Component Will UNMOUNT!')  
     }  
  }  