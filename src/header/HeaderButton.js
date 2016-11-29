import React, { Component } from 'react';
import { Link } from "react-router";
import '../css/header.css';

class HeaderButton extends Component {
  render() {
    return (
      <Link to={this.props.rout}>
          <button className="header-button">{this.props.title}</button>
      </Link>
    );
  }
}

export default HeaderButton;