import React, { Component } from 'react'

export default class ReactOnClick extends Component {
    constructor() {  
        super();        
        this.state = { displayBio: false };  
        console.log('Component this', this);  
        this.toggleDisplayBio = this.toggleDisplayBio.bind(this);  
        }  
        toggleDisplayBio(){  
            this.setState({displayBio: !this.state.displayBio});  
            }  
        render() {  
            return ( 
                <div>  
                    <h1>Welcome to Wikipedeia!!</h1>  
                    {  
                        this.state.displayBio ? (   
                            <div>  
                                <p><h4>India, officially the Republic of India (ISO: Bhārat Gaṇarājya),[21] is a country in South Asia. It is the seventh-largest country by area; the most populous country as of June 2023;[22][23] and from the time of its independence in 1947, the world's most populous democracy.[24][25][26] Bounded by the Indian Ocean on the south, the Arabian Sea on the southwest, and the Bay of Bengal on the southeast, it shares land borders with Pakistan to the west;[j] China, Nepal, and Bhutan to the north; and Bangladesh and Myanmar to the east. In the Indian Ocean, India is in the vicinity of Sri Lanka and the Maldives; its Andaman and Nicobar Islands share a maritime border with Thailand, Myanmar, and Indonesia.</h4></p>  
                                <button onClick={this.toggleDisplayBio}> Show Less </button>  
                          </div>  
                            ) : (  
                                <div>  
                                    <button onClick={this.toggleDisplayBio}> Read More </button>  
                                </div>  
                            )  
                    }  
               </div>  
          )  
      }  
  }  