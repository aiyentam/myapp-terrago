import React, { Component } from "react";
import "./Columns.css";

class Columns extends Component {
  render() {
    return (
      <div className="columns">
        <h1>Number of Columns</h1>
        <div className="column-container">
          <h1>Columns</h1>
          <div className="column" />
        </div>
      </div>
    );
  }
}

export default Columns;
