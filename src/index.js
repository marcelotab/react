import React from "react";
import ReactDOM from "react-dom";
import Nav from "./nav.js";

import "./styles.css";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      completeURL: "https://swapi.co/api/people/4"
    };
  }
  render() {
    return (
      <div className="App">
        <Nav clase="navbar navbar-dark bg-dark" />
        <h1 className="">Hello CodeSandbox</h1>
        <h2>Start editing to see some magic happen!</h2>
      </div>
    );
  }
}

export default App;
const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
