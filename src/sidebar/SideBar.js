import React, { Component } from "react";
import LineItem from "./LineItems";
import "./Sidebar.css";

class Sidebar extends Component {
  render() {
    return (
      <div className="sidebar">
        <LineItem color={this.props.color} />
        <hr />
        <LineItem color={this.props.color} />
        <hr />
        <LineItem color={this.props.color} />
        <hr />
      </div>
    );
  }
}

export default Sidebar;
