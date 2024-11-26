import React, { Component } from 'react'

export default class ConstructorComp extends Component {
    constructor(props){  
        super(props);  
        this.state = {  
             data: 'Welcome to Develearn'  
          }  
        this.handleEvent = this.handleEvent.bind(this);  
      }  
      handleEvent(){  
        alert(`Hello!! ${this.state.data} To Learn Lead and Develop`);  
      }  
      render() {  
        return (  
          <div className="App">  
        <h2>React Constructor Example</h2>  
        <input type ="text" value={this.state.data} />  
            <button onClick={this.handleEvent}>Please Click</button>  
          </div>  
        );  
      }  
    }  
