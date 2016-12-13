import React, { Component } from 'react';
import '../css/body.css';
import '../css/font-awesome.css';



class CurriculumCard extends Component {
  render() {

  	var content = this.props.model.items;
    var display = [];
    function createMarkup(string) { return {__html: string}; };
    if ("normal" === this.props.model.style){
    	for (var i=0; i < content.length; i++){
	    	display.push(
		    	<p key={this.props.model.items[i].text} className="body-text" dangerouslySetInnerHTML={createMarkup(this.props.model.items[i].text)} />
	    	);
    	}
    } else if ("list" === this.props.model.style){
    	for (i=0; i < content.length; i++){
	    	display.push(
		    	<li key={this.props.model.items[i].text}>
		    		<p className="body-text" dangerouslySetInnerHTML={createMarkup(this.props.model.items[i].text)} />
	     		</li>
	    	);
    	}
    } else if ("picture" === this.props.model.style){
    	var src = "images/" + this.props.model.image;
    	display.push(
    		<img key={this.props.model.subtitle} className="curriculum-img" src={src} alt={this.props.model.subtitle} />
    	);
    	for (i=0; i < content.length; i++){
	    	display.push(
		    	<p key={this.props.model.items[i].text} className="body-text" dangerouslySetInnerHTML={createMarkup(this.props.model.items[i].text)} />
	    	);
    	}
    } 

    return (
        <div className="curriculum-sub-topic">
            <br></br>
         	<h4 className="body-text curriculum-sub-title" dangerouslySetInnerHTML={createMarkup(this.props.model.title)} />
         	{display}
        </div>
    );
  }
}

export default CurriculumCard;