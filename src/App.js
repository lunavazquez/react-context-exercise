import React, { Component } from "react";
import "./App.css";
import Main from "./component/Main";
import Header from "./component/Header";
import AppProvider from "./context/AppContext";

class App extends Component {
  render() {
    return (
      <AppProvider>
        <Header />
        <Main />
      </AppProvider>
    );
  }
}

export default App;
