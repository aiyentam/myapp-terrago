import React, { Component } from "react";
import "./Switch.css";

class Switch extends Component {
  render() {
    return (
      <div className="switch">
        <input type="radio" id="green" name="switch" value="green" checked />
        <label for="green">Green</label>
        <input type="radio" id="red" name="switch" value="red" />
        <label for="red">Red</label>
      </div>
    );
  }
}

export default Switch;
