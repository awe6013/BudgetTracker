import React from 'react';
import TrackerReact from 'meteor/ultimatejs:tracker-react';
import SubHeader from './layouts/SubHeader.jsx';
import InfoBar from './InfoBar.jsx';


export default class MainBox extends TrackerReact(React.Component) {
	constructor(){
		super();
		// if(!Session.get("infobar")){
		// 	Session.set("infobar",true);
		// }
	}

	stopit(event){
		event.stopPropagation();
	}

	render() {
		return (
				<div>
	        <SubHeader content={this.props.subheader} />
	        <div id="mainbox" className={this.props.showinfobar?"main-box":"main-box info-hide"}>
						{this.props.content}
	        </div>

	        <InfoBar
	          show={this.props.showinfobar}
	          content={this.props.infobar}
	          />
	      </div>


		)
	}
}
