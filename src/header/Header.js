import React, { Component } from "react";
import "./Header.css";

class Header extends Component {
  render() {
    let greenColor = {};
    let redColor = {};

    if (this.props.color === "seagreen") {
      greenColor = {
        backgroundColor: this.props.color,
        color: "white",
        border: `1px solid ${this.props.color}`
      };
      redColor = {
        backgroundColor: "white",
        color: this.props.color,
        border: `1px solid ${this.props.color}`
      };
    } else {
      greenColor = {
        backgroundColor: "white",
        color: this.props.color,
        border: `1px solid ${this.props.color}`
      };
      redColor = {
        backgroundColor: this.props.color,
        color: "white",
        border: `1px solid ${this.props.color}`
      };
    }

    return (
      <div className="header">
        <img
          src={`/images/app-${this.props.color}.png`}
          alt="logo"
          className="logo"
        />
        <div className="switch">
          <input
            type="radio"
            id="green_switch"
            name="switch"
            value="seagreen"
            onChange={this.props.onColorChange}
            checked={this.props.color === "seagreen"}
          />
          <label htmlFor="green_switch" style={greenColor}>
            Green
          </label>
          <input
            type="radio"
            id="red_switch"
            name="switch"
            value="crimson"
            onChange={this.props.onColorChange}
            checked={this.props.color === "crimson"}
          />
          <label htmlFor="red_switch" style={redColor}>
            Red
          </label>
        </div>
        <span alt="face-icon" className="face-icon" />
      </div>
    );
  }
}

export default Header;
