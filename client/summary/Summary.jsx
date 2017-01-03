import React from 'react';
import TrackerReact from 'meteor/ultimatejs:tracker-react';
import Tran from './Tran.jsx';

export default class Summary extends TrackerReact(React.Component) {
	constructor(){
		super();

		this.state = {

		};

	}

	getTrans(){
		return Trans.find({}, {sort: {date: -1}}).fetch();
	}

	render() {
		return (
			<div className="row">
				<div className="col s12">
					<h2>My Transactions</h2>
					<div className="divider"></div>
					<table className="striped responsive-table">
						<thead>
							<tr>
								<th>Date</th>
								<th>Company</th>
								<th>Description</th>
								<th>Category</th>
								<th>Amount ($)</th>
							</tr>
						</thead>
						<tbody>
							{this.getTrans().map((tran)=>{
								return <Tran key={tran._id} id={tran._id} />
							})}
						</tbody>
					</table>
				</div>
			</div>
		)
	}
}
