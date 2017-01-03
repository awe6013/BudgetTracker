import React from 'react';
import TrackerReact from 'meteor/ultimatejs:tracker-react';

export default class Tran extends TrackerReact(React.Component) {
	constructor(){
		super();

		this.state = {

		};

	}

	getTran(){
		return Trans.findOne(this.props.id);
	}

	getCat(id){
		return Cats.findOne(id);
	}

	open(){
		console.log("This will open transaction '"
			+this.getTran().description+"' for edit.");
	}

	render() {
		let tran = this.getTran();
		let cat = this.getCat(tran.category);

		return (
			<tr onDoubleClick={this.open.bind(this)}>
				<td>{new moment(tran.date.toISOString()).format("MM/DD/YYYY")}</td>
				<td>{tran.paidto}</td>
				<td>{tran.description}</td>
				<td>{cat.label}</td>
				<td>
					<span style={{float: "right"}}>
						{cat.type!="Income"?"-":"+"}${tran.amount.toLocaleString()}
					</span>
				</td>
			</tr>
		)
	}
}
