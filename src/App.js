import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import UserInput from './UserInput/UserInput';
import UserOutput from './UserOutput/UserOutput';
import { render } from '@testing-library/react';

class App extends Component {
  state = {
      usernames : ['Amir Hossein' , 'ALi'],
      passwords : ['123456' , '1qaz']

  };

  inputChangeHandler = (event) =>{
      let temp = event.target.value;
      this.setState(
      {
          usernames : [temp , this.state.usernames[1]]
      });
  }

  render(){
    return (
      <div className="App">
        <UserInput change={this.inputChangeHandler}>{this.state.usernames[0]}</UserInput>
        <UserOutput username={this.state.usernames[0]} password={this.state.passwords[0]} />
        <UserOutput username={this.state.usernames[1]} password={this.state.passwords[1]} />
      </div>
    );
  }
}

export default App;
