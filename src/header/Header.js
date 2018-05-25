import React, { Component } from "react";
import Switch from "../switch/Switch";
import "./Header.css";

class Header extends Component {
  render() {
    return (
      <div className="header">
        <h1>header</h1>
        <Switch />
        <h2>logo</h2>
      </div>
    );
  }
}

export default Header;
