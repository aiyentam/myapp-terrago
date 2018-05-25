import React, { Component } from "react";
import Columns from "../columns/Columns";
import "./Main.css";

class Main extends Component {
  render() {
    return (
      <div className="main">
        <form className="column-amount">
          <label>Number of columns</label>
          <input type="number" name="numOfCol" />
          <label>Row height</label>
          <input type="number" name="height" placeholder="px" />
        </form>
        <Columns />
      </div>
    );
  }
}

export default Main;
