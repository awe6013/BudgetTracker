import React from 'react';
import TrackerReact from 'meteor/ultimatejs:tracker-react';
import Summary from './Summary.jsx';

export default class SummaryWrapper extends TrackerReact(React.Component) {
	constructor(){
		super();

		this.state = {
			subscription: {
				Trans: Meteor.subscribe("MyTransactions")
			}
		};

	}

	componentWillUnmount(){
		this.state.subscription.Trans.stop();
	}



	render() {
		document.title="Tracer - Transaction Summary";
		return (
			<Summary />
		)
	}
}
