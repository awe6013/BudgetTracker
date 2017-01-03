import React from 'react';
import TrackerReact from 'meteor/ultimatejs:tracker-react';
import TransactionForm from './widgets/TransactionForm.jsx';
import IncomeForm from './widgets/IncomeForm.jsx';

export default class DashboardWrapper extends TrackerReact(React.Component) {
	constructor(){
		super();

	}



	render() {
		document.title="Tracer - My Dashboard";
		return (
				<div className="row">
					<div className="col s12 l6">
						<div className="card">
							<div className="card-content">
								<span className="card-title">Record New Transaction</span>
													<TransactionForm />
							</div>
						</div>
					</div>
					<div className="col s12 l6">
						<div className="card">
							<div className="card-content">
								<span className="card-title">Record New Income</span>
													<IncomeForm />
							</div>
						</div>
					</div>
				</div>
		)
	}
}
