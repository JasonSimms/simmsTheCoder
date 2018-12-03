import React, { Component } from "react";
import "./App.scss";
import portrait from "./style/images/jason1.jpg"

import Toolbox from "./components/Toolbox"

class App extends Component {
  render() {
    return (
      <div className="App">
        <div id="greeting">
          <div id="header">
            <h1>simmsTheCoder</h1>
            <h2>Web Services and Javascript Engineering</h2>
          </div>
          <img src={portrait} alt="Portrait"/>
          <div className="greeting">
            I'm Jason. A freelance Web Developer from California, currently
            residing in Berlin. <br />I like to build effective, beautiful
            websites for diffusing information in a scalable way, and automating
            the analog endeavours that have no place in the future.
          </div>
          <div className="seperator" />
          <div className="greeting">
            My stack of choice currently is React, Express, NodeJs, and MongoDb.
            But I'm always experimenting with new to me tools.
          </div>
          <Toolbox/>
          <div className="seperator" />

          <div className="greeting">
            When I step away from the computer, I'm a family man enjoying home
            cooking, surfing, snowboarding, and investing.
          </div>
        </div>

        
      </div>
    );
  }
}

export default App;
