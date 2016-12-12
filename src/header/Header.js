import React, { Component } from 'react';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group'
import HeaderButton from './HeaderButton.js';
import DropDown from './DropDown.js';
import '../css/header.css';

class Header extends Component {
  constructor(props) {
    super(props);
    this.updateDimensions = this.updateDimensions.bind(this);
    this.state = {width:400};
  }
  updateDimensions() {

    var w = window,
        d = document,
        documentElement = d.documentElement,
        body = d.getElementsByTagName('body')[0],
        width = w.innerWidth || documentElement.clientWidth || body.clientWidth,
        height = w.innerHeight|| documentElement.clientHeight|| body.clientHeight;

        this.setState({width: width, height: height});
        // if you are using ES2015 I'm pretty sure you can do this: this.setState({width, height});
    }
    componentWillMount() {
        this.updateDimensions();
    }
    componentDidMount() {
        window.addEventListener("resize", this.updateDimensions);
    }
    componentWillUnmount() {
        window.removeEventListener("resize", this.updateDimensions);
    }
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
            {this.state.width <= 493 ? 
            <DropDown /> 
            :
              <div className="center">
                <HeaderButton title="SOBRE MIM" rout="/"/>
                <HeaderButton title="CURRICULUM" rout="curriculum"/>
                <HeaderButton title="TIMELINE" rout="timeline"/>
            </div>}
            </div>
            </ReactCSSTransitionGroup>
          </div>
        </div>
    );
  }
}

export default Header;