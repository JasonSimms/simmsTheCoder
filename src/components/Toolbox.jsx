import React, { Component } from "react";
import logo from "../style/images/logo.svg";
import nodelogo from "../style/images/nodejslogo.png";
import mongologo from "../style/images/MongoDBlogo.png";

class Toolbox extends Component {
  render() {
    return (
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <img src={nodelogo} className="App-logo" alt="logo" />
        <img src={mongologo} className="App-logo" alt="logo" />
      </header>
    );
  }
}

export default Toolbox;
