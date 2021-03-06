import React, { Component } from 'react'
import { Provider } from 'react-redux'
import { createStore, applyMiddleware } from 'redux'
import thunk from 'redux-thunk';
import TodoTogetherApp from './reducers'
import logo from './assets/images/logo.png'
import TodoList from './components/TodoList'
import Tabs from './components/Tabs'
import GroupInfo from './components/GroupInfo'
import NavMenue from './components/NavMenue'
import './App.css'
import CurrentWorkig from './components/CurrentWorking';


class App extends Component {
  render() {
    const store = createStore(
      TodoTogetherApp,
      applyMiddleware(thunk)
    )
    
    return (
      <Provider store={store}>
        <div className="app">
            <div className="header">
              <h1>ToDoTogether</h1>
            </div>
            <CurrentWorkig></CurrentWorkig>
          <NavMenue> </NavMenue>
          <img className="logo" src={logo}/> 
          <GroupInfo> </GroupInfo>
          <Tabs></Tabs>
        </div>
      </Provider>
    );
  }
}

export default App;
