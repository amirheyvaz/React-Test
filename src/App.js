import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import UserInput from './UserInput/UserInput';
import UserOutput from './UserOutput/UserOutput';
import { render } from '@testing-library/react';
import ValidationComponent from './ValidationComponent/ValidationComponent';
import CharComponent from './CharComponent/CharComponent';

class App extends Component {
  state = {
    inputLenght : null,
    input: '',
    chars: []
  };
  
  charClickHanlder =(event ,index) => {
    debugger;
    let input = this.state.input.split('');
    input.splice(index , 1);
    let inputStr = input.join('');
    this.setState({
      inputLenght: inputStr.length,
      input: inputStr,
      chars: input
    });
  }

  inputChangeHandler = (event) =>{
    const len = event.target.value;
    
    this.setState(
      {
        inputLenght : len.length,
        input: len,
        chars: len.split('')
      });
      if(len.length>=5){
        event.target.className = '';
        
      }
      else{
        event.target.className = 'inputRed';
      }
    }
    
    render(){
      let chars = (
        <div>
          {this.state.chars.map(
            (char , index) => {
            return  (<CharComponent click={(event) => this.charClickHanlder(event , index)}>{char}</CharComponent>);
            }
          )}
        </div>
          
          );
          
          return (
            <div className="App">
            <input placeholder='Enter a text...' onChange={this.inputChangeHandler} value={this.state.input} />
            <ValidationComponent length={this.state.inputLenght}></ValidationComponent>
            {chars}
            </div>
            );
          }
}
        
export default App;
        