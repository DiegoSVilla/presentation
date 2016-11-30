import React, { Component } from 'react';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group'
import '../css/body.css';


class Timeline extends Component {
  componentDidMount () {
    window.scrollTo(0, 0)
  }
  render() {
    return (
        <div className="body">
	        <ReactCSSTransitionGroup
	          transitionName="example"
	          transitionAppear={true}
	          transitionAppearTimeout={500}
	          transitionEnterTimeout={500}
	          transitionLeaveTimeout={500}>
	          <br></br>
	          <br></br>
	          <br></br>
	          <div className="body-center">

              </div>
              <br></br>
              <br></br>
              <br></br>
              <p className="body-text body-center">
	    		Área do site em desnvolvimento!	
	     	  </p>
	        </ReactCSSTransitionGroup>
        </div>
    );
  }
}

export default Timeline;