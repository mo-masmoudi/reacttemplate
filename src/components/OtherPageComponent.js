import React from "react";
import { Link } from "react-router-dom";
import logo from "../logo.svg";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>Other Page Component</p>
        <Link to="/">
          <button
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Go Home!
          </button>
        </Link>
      </header>
    </div>
  );
}

export default App;
