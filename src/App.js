import React, { Component } from 'react'
import { Provider } from 'react-redux'
import { createStore } from 'redux'
import TodoTogetherApp from './reducers'
import Tabs from './components/Tabs'
import GroupInfo from './components/GroupInfo'
import './App.css'

class App extends Component {
  render() {
    const store = createStore(TodoTogetherApp)

    return (
      <Provider store={store}>
        <div className="App">
          <GroupInfo> </GroupInfo>
          <Tabs></Tabs>
        </div>
      </Provider>
    );
  }
}

export default App;
