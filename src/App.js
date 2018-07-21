import React, { Component } from 'react'
import { Provider } from 'react-redux'
import { createStore, applyMiddleware } from 'redux'
import thunk from 'redux-thunk';
import TodoTogetherApp from './reducers'
import Tabs from './components/Tabs'
import GroupInfo from './components/GroupInfo'
import NavMenue from './components/NavMenue'
import './App.css'

class App extends Component {
  render() {
    const store = createStore(
      TodoTogetherApp,
      applyMiddleware(thunk)
    )
    
    return (
      <Provider store={store}>
        <div className="App">
          <div className="header">
            <h1>ToDoTogether</h1>
          </div>
            <NavMenue> </NavMenue>
            <GroupInfo> </GroupInfo>
            <Tabs></Tabs>
        </div>
      </Provider>
    );
  }
}

export default App;
