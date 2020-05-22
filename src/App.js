import React, { Component } from 'react';
import './App.css';
import Keyboard from './components/Keyboard'
import { Provider } from 'react-redux';
import store from './redux/store';


class App extends Component {
  render() {
    return (
      <Provider store={store}>
      <div className="main_container"> 
      <Keyboard/>
       
      </div>
      </Provider>
    );
  }
}

export default App;
