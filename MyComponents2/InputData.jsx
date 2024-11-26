import React, { Component } from 'react'

export default class InputData extends Component {
    constructor(props) {  
        super(props);  
        this.state = {  
            countryName: ''  
        };  
    }  
    changeText(event) {  
        this.setState({  
            countryName: event.target.value  
        });  
    }  
    render() {  
        return (  
            <div>  
                <h2>Simple Event Example</h2>  
                <label htmlFor="name">Enter Country name: </label>  
                <input type="text" id="countryname" onChange={this.changeText.bind(this)}/>  
                <h4>You entered: { this.state.countryName }</h4>  
            </div>  
        );  
    }  
}  