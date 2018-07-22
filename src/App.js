import React, { Component } from 'react'
import logo from './assets/images/logo.png'
import './App.css'
import TodoList from './components/TodoList'
import Tabs from './components/Tabs'
import GroupInfo from './components/GroupInfo'
import NavMenue from './components/NavMenue'


class App extends Component {
  render() {
    return (
      <div className="App">
        <div class = "header">
          <h1>ToDoTogether</h1>
        </div>
        <NavMenue> </NavMenue>
        <img className="logo" src ={logo}/> 
        <GroupInfo> </GroupInfo>
        <Tabs></Tabs>
      </div>
    );
  }
}

export default App;
