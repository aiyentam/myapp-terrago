import React, { Component } from "react";
import "./Columns.css";

class Columns extends Component {
  render() {
    const columnWidth = 100 / this.props.numOfCol;
    const columnStyle = {
      ...this.props.style,
      width: `${columnWidth}%`
    };

    let columns = [];
    for (let i = 0; i < this.props.numOfCol; i++) {
      columns.push(<div className="column" style={columnStyle} key={i} />);
    }
    return (
      <div className="columns">
        <div className="column-container">{columns}</div>
      </div>
    );
  }
}

export default Columns;
