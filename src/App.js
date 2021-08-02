import React, { Component } from "react";
import Footer from "./component/Footer";
import Header from "./component/Header";
import Main from "./component/Main";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";

export class App extends Component {
  render() {
    return (
      <div>
        <Header />
        <Main responsive/>
        <Footer />
      </div>
    );
  }
}

export default App;

//fixed main and add eslintrc
