import React, { Component } from "react";
import Columns from "../columns/Columns";
import "./Main.css";

class Main extends Component {
  render() {
    return (
      <div className="main">
        <h1>Main</h1>
        <Columns />
      </div>
    );
  }
}

export default Main;
