import React, { Component } from "react";
import "./style.css";

class Button extends Component {
  buttonStyle = () => ({
    backgroundColor: this.props.outline ? "#f05340" : "transparent",
    color: this.props.outline ? "#fff" : "#f05340",
    border: "2px solid #f05340",
    padding: "10px 20px",
    textDecoration: "none",
    display: "inline-block",
    fontWeight: "bold",
    cursor: "pointer",
  });

  render() {
    return (
      <div className="Button">
        <a
          href={this.props.btnLink}
          style={this.buttonStyle()}
          onClick={this.props.onClick}
          className="btn"
        >
          {this.props.btnText}
        </a>
      </div>
    );
  }
}

export default Button;
