import React, { Component } from "react";
import "./Logo.css";
import logo from "../../assets/images/logo-light.svg";
class Logo extends Component {
  render() {
    return (
      <div>
        <img src={logo} alt="Logo" className="logo-main" />
      </div>
    );
  }
}

export default Logo;
