import React, { Component } from 'react';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';
import CurriculumTopic from './CurriculumTopic.js';
import curriculumTopics from './poJSo/ParentCCTable.js';
import '../css/body.css';

class Curriculum extends Component {
  componentDidMount () {
    window.scrollTo(0, 0)
  }
  render() {
    var topics = [];
    for (var i=0; i < curriculumTopics.topics.length; i++){
      topics.push(
      <div key={curriculumTopics.topics[i].title}>
        <CurriculumTopic model={curriculumTopics.topics[i]} />
      </div>
      );
    }
    return (
        <div className="body">
          <ReactCSSTransitionGroup
            transitionName="example"
            transitionAppear={true}
            transitionAppearTimeout={500}
            transitionEnterTimeout={500}
            transitionLeaveTimeout={500}>
            <p><a className="body-text" href="CVDiegoVillalobos.pdf">Download versão PDF!</a></p>
            {topics}                                 
          </ReactCSSTransitionGroup>
        </div>
    );
  }
}

export default Curriculum;