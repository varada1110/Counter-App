import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      count:0
    }
  }

  increment = () => {
    this.setState({count: this.state.count+1});
  }
  decrement = () => {
    this.setState({count: this.state.count-1});
  }
  reset = () =>{
    this.setState({count:0});
  }
  render(){
  return (
    <div className="App">
      
      <button onClick={this.increment}  className="btn">+</button>
      <h1>{this.state.count}</h1>
      <button onClick={this.decrement} className="btn">-</button>
      <div>
      <button onClick={this.reset} className="reset">RESET</button>
      </div>
    </div>
  );
}
}

export default App;
