import React, { Component } from 'react'
import { Provider } from 'react-redux'
import { createStore } from 'redux'
import Tabs from './components/Tabs'
import TodoTogetherApp from './reducers'
import './App.css'

class App extends Component {
  render() {
    const store = createStore(TodoTogetherApp)

    return (
      <Provider store={store}>
        <div className="App">
          <Tabs></Tabs>
        </div>
      </Provider>
    );
  }
}

export default App;
