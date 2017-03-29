import React, { Component } from 'react';
import logo from '../assets/logo.svg';
import './App.css';

import Footer from './Footer'
import AddTodo from '../containers/AddTodo'
import VisibleTodoList from '../containers/VisibleTodoList'

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to React</h2>
        </div>

          <AddTodo />
          <VisibleTodoList />
          <Footer />

      </div>
    );
  }
}

export default App;
