import React, { Component } from 'react';
import curriculumCards from './poJSo/CurriculumCardTable.js';
import CurriculumCard from './CurriculumCard';
import '../css/body.css';

class CurriculumTopic extends Component {
  render() {
  	function createMarkup(string) { return {__html: string}; };
  	var cards = curriculumCards.cards(this.props.model.name);
    var cardList = [];
    for (var i=0; i < cards.length; i++){
    	cardList.push(
	    	<div key={cards[i].title}>
    			<CurriculumCard model={cards[i]} />
     		</div>
    	);
    }

    return (
        <div className="curriculum-topic">
        	<br></br>
         	<h3 className="body-text curriculum-title" dangerouslySetInnerHTML={createMarkup(this.props.model.title)} />
         	{cardList}
         	<br></br>
        </div>
    );
  }
}

export default CurriculumTopic;