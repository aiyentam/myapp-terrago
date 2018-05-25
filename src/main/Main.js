import React, { Component } from "react";
import Columns from "../columns/Columns";
import "./Main.css";

class Main extends Component {
  constructor(props) {
    super(props);
    this.state = {
      numOfCol: 3,
      height: 760
    };
    this.onInputChange = this.onInputChange.bind(this);
  }

  onInputChange(e) {
    console.log("name: " + e.target.name);
    console.log("value: " + e.target.value);
    this.setState({
      [e.target.name]: e.target.value
    });
  }

  render() {
    const columnStyle = {
      height: this.state.height + "px",
      backgroundColor: this.props.color
    };
    return (
      <div className="main">
        <form className="column-amount">
          <label>Number of columns</label>
          <input
            type="number"
            name="numOfCol"
            value={this.state.numOfCol}
            onChange={this.onInputChange}
          />
          <label>Row height</label>
          <input
            type="number"
            name="height"
            value={this.state.height}
            onChange={this.onInputChange}
          />px
        </form>
        <Columns numOfCol={this.state.numOfCol} style={columnStyle} />
      </div>
    );
  }
}

export default Main;
