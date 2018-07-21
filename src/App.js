import React, { Component } from 'react'
import logo from './logo.svg'
import './App.css'
import TodoList from './components/TodoList'
import Tabs from './components/Tabs'

class App extends Component {
  render() {
    return (
      <GroupInfo> </GroupInfo>
      <div className="App">
        <Tabs></Tabs>
      </div>
    );
  }
}

export default App;
