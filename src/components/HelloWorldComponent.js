import React from "react";
import { Link } from "react-router-dom";

import Loading from "./Loading";
import CryptoInfoTable from "./CryptoInfoTable";
import logo from "../logo.svg";

function App(props) {
  if (props.loading) return <Loading />;

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>Hello World Component</p>
        <Link to="/other">
          <button
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Go to other page!
          </button>
        </Link>
        <CryptoInfoTable infos={props.cryptosInfos} />
      </header>
    </div>
  );
}

export default App;
