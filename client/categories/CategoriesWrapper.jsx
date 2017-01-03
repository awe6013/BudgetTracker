import React from 'react';
import TrackerReact from 'meteor/ultimatejs:tracker-react';
import CategoriesForm from './CategoriesForm.jsx';
import Cat from './Cat.jsx';

export default class CategoriesWrapper extends TrackerReact(React.Component) {
	constructor(){
		super();

		this.state = {
			subscription: {

			}
		};

	}

	componentWillUnmount(){

	}

	getIncome(){
		return Cats.find({type: "Income"}).fetch();
	}

	getNecessary(){
		return Cats.find({type: "Necessary Expenses"}).fetch();
	}

	getDiscretionary(){
		return Cats.find({type: "Discretionary Expenses"}).fetch();
	}

	render() {
		document.title="Tracer - Manage Categories";
		return (
			<div>
				<div className="row">
					<div className="col s12 l6">
						<div className="card">
							<div className="card-content">
								<span className="card-title">Insert New Category</span>
								<CategoriesForm />
							</div>
						</div>
					</div>
				</div>
				<div className="divider"></div>
				<div className="row">
					<div className="col s12 m4">
						<table>
							<thead>
								<tr>
									<th colSpan="2">Income</th>
								</tr>
							</thead>
							<tbody>
								{this.getIncome().map((cat)=>{
									return <Cat key={cat._id} cat={cat} />
								})}
							</tbody>
						</table>
					</div>
					<div className="col s12 m4">
						<table>
							<thead>
								<tr>
									<th colSpan="2">Necessary Expenses</th>
								</tr>
							</thead>
							<tbody>
								{this.getNecessary().map((cat)=>{
									return <Cat key={cat._id} cat={cat} />
								})}
							</tbody>
						</table>
					</div>
					<div className="col s12 m4">
						<table>
							<thead>
								<tr>
									<th colSpan="2">Discretionary Expenses</th>
								</tr>
							</thead>
							<tbody>
								{this.getDiscretionary().map((cat)=>{
									return <Cat key={cat._id} cat={cat} />
								})}
							</tbody>
						</table>
					</div>
				</div>
			</div>
		)
	}
}
