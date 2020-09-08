import React, { Component } from "react";
import logo from './logo.svg';
import './App.css';
import { Provider } from "react-redux"; //Needed to Wrap Entire App also provides store
import Posts from './components/Posts'
import PostForm from './components/PostForm'
import store from './Store'

// npm i redux react-redux redux-thunk to Bring in all Redux Libraries

class App extends Component {
  render(){
  return (
    // store is required within Provider
    <Provider store={store}> 
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
        </header>
        <PostForm />
        <hr/>
        <Posts />
      </div>
    </Provider>
  );
  }
}

export default App;
