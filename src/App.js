import React, { Component } from 'react'
import logo from './logo.svg'
import './App.css'
import TodoList from './components/TodoList'
import Tabs from './components/Tabs'
import GroupInfo from './components/GroupInfo'

class App extends Component {
  render() {
    return (
      <div className="App">
        <GroupInfo> </GroupInfo>
        <Tabs></Tabs>
      </div>
    );
  }
}

export default App;
