import React from "react";
import ReactDOM from "react-dom";

import "./index.css";
 import Login from "./Login";
import Header from "products/Header";

const App = () => (
 
  <div className="container-fluid p-0">
    <Header />
    <Login />
  </div>
);
ReactDOM.render(<App />, document.getElementById("app"));
