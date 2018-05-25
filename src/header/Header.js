import React, { Component } from "react";
import Switch from "../switch/Switch";
import "./Header.css";

class Header extends Component {
  render() {
    return (
      <div className="header">
        <img src="/images/app-green.png" alt="green-logo" className="logo" />
        <Switch />
        <img src="/images/face.jpg" alt="face-icon" className="face-icon" />
      </div>
    );
  }
}

export default Header;
