import React, { Component } from "react";
import "./Sidebar.css";

class LineItem extends Component {
  render() {
    return (
      <div className="line-item">
        <img src="/images/icon-green.svg" alt="icon" className="icon" />
        <div className="title">
          <h1>Line Item title</h1>
          <h2>Subheader here</h2>
        </div>
        <div className="detail">
          <p>A detail</p>
        </div>
      </div>
    );
  }
}

export default LineItem;
