import React, { Component } from "react";
import LineItem from "./LineItems";
import "./Sidebar.css";

class Sidebar extends Component {
  render() {
    return (
      <div className="sidebar">
        <LineItem />
        <hr />
        <LineItem />
        <hr />
        <LineItem />
        <hr />
      </div>
    );
  }
}

export default Sidebar;
