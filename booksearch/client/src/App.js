import React, { Component } from "react";
import Main from './pages/main';
import Nav from './components/nav'
import "./App.css";

class App extends Component {
  render() {
    return (
      <>
        <Nav />
        <Main />
      </>
    );
  }
}

export default App;
