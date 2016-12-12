import React, { Component } from 'react';
import { Link } from "react-router";
import HeaderButton from './HeaderButton.js';
import '../css/header.css';
import '../css/font-awesome.css';


class DropDown extends Component {
  constructor(props) {
    super(props);
    this.onClick = this.onClick.bind(this);
    this.state = {showA:false};
  }
  onClick(e){
  	this.setState({ showA: !this.state.showA });
    console.log(this.state.showA);
  }
  render() {
    const menu = this.state.showA;
    console.log(menu);
    return (
      <div>
          {  menu ?
            <div className="header-menu"> 
              <button className="header-tuggle" onClick={this.onClick}><i className='fa fa-bars on'></i></button> 
              <div>
                <HeaderButton title="SOBRE MIM" onClick={this.onClick.bind(this)} rout="/"/>
                <br></br>
                <HeaderButton title="CURRICULUM" onClick={this.onClick.bind(this)} rout="curriculum"/>
                <br></br>
                <HeaderButton title="TIMELINE" onClick={this.onClick.bind(this)} rout="timeline"/>
              </div>
            </div>
            :
            <div className="header-menu">
              <button className="header-tuggle" onClick={this.onClick}><i className='fa fa-bars off'></i></button>
            </div>
          }
      </div>
    );
  }
}

export default DropDown;