import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
     function Person(name, favColor) {
       console.log("Hello my name is " + name + "and my favorite color is " + favColor + ".")
     }

     Person(" John Doe", "blue");
     Person("Jane Smith", "green")
    );
  }
}

export default App;
