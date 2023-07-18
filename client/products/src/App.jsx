import React from "react";
import ReactDOM from "react-dom";

import "./index.css";

import Products from "./Products";
import Header from "./Header";

const App = () => (
  <div className="container-fluid p-0">
    <Header />
    <Products/>
  </div>
);
ReactDOM.render(<App />, document.getElementById("app"));
