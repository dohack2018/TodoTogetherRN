import React, { Component } from 'react'
import { Provider } from 'react-redux'
import { createStore } from 'redux'
import TodoTogetherApp from './reducers'
import Tabs from './components/Tabs'
import GroupInfo from './components/GroupInfo'
import './App.css'
import NavMenue from './components/NavMenue'

class App extends Component {
  render() {
    const store = createStore(
      TodoTogetherApp,
      window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
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
