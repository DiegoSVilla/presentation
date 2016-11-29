import React, { Component } from 'react';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group'
import HeaderButton from './HeaderButton.js';
import '../css/header.css';

class Header extends Component {
  render() {
    return (
        <div className="header-container">
          <div className="header">
            <ReactCSSTransitionGroup
              transitionName="example"
              transitionAppear={true}
              transitionAppearTimeout={500}
              transitionEnterTimeout={500}
              transitionLeaveTimeout={500}>
              <div className="header-title">
              </div>
            <div className="header-btn-cnt">
              <HeaderButton title="SOBRE MIM" rout="/"/><HeaderButton title="CURRICULUM" rout="curriculum"/><HeaderButton title="TIMELINE" rout="timeline"/>
            </div>
            </ReactCSSTransitionGroup>
          </div>
        </div>
    );
  }
}

export default Header;