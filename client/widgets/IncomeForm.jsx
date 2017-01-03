import React from 'react';
import TrackerReact from 'meteor/ultimatejs:tracker-react';
import Combobox from 'react-widgets/lib/Combobox';
import DateTimePicker from 'react-widgets/lib/DateTimePicker';
import moment from 'moment';
import momentLocalizer from 'react-widgets/lib/localizers/moment';

export default class IncomeForm extends TrackerReact(React.Component) {
	constructor(){
		super();
		momentLocalizer(moment);
		this.state = {
			date: new Date(),
			cat: ""
		};

	}

	componentWillUnmount(){

	}

	handleDateChange(date, datestring){
		console.log(date);
		console.log(datestring);
		this.setState({date: date});
	}

	handleCatChange(val){
		this.setState({cat: val._id});
	}

	submit(event){
		event.preventDefault();
		//perform transaction submit
		if(!this.state.cat){
			Materialize.toast("Please select a valid category.", 4000);
			return;
		}
		//Check amount and ensure it is double
		var amt = +this.refs.amt.value;
		//console.log(amt);
		if(isNaN(amt)){
			//window.alert("Please enter a valid amount")
			Materialize.toast("Please enter a valid number for amount.", 4000);
			return;
		}
		else{
			amt = amt.toFixed(2);
		}
		Meteor.call("recordIncome",
			this.state.cat,
			this.state.date,
			amt
		);
		//clear Form
		this.refs.amt.value="";
		Materialize.toast("Income submission of amount: $"+amt+ " was successful.", 4000);
	}

	getOptions(){
		return Cats.find({type: "Income"}).fetch();
	}

	// INCOME
	// category
	// Date (filled in for now by default, but can be changed)
	// amount


	render() {
		return (
			<form onSubmit={this.submit.bind(this)}>
				<div className="row">
					<div className="col s12">
						<label>Date</label>
						<DateTimePicker ref="date"
			        value={this.state.date}
							editFormat={"MM/DD/YYYY h:mmA"}
							format={"MMM DD YYYY h:mmA"}
			        onChange={this.handleDateChange.bind(this)} />
					</div>
				</div>
				<div className="row">
					<div className="col s12">
						<label>Category</label>
						<Combobox
								ref="cat"
								valueField="_id"
								textField="label"
								groupBy="type"
								filter="contains"
						    defaultValue={this.state.cat}
						    data={this.getOptions()}
						    onChange={this.handleCatChange.bind(this)}
						/>
					</div>
				</div>
				<div className="row">
					<div className="input-field col s12">
						<input type="text" name="amt" ref="amt" required />
						<label htmlFor="amt">Amount ($)</label>
					</div>
				</div>
				<div className="row">
					<input className="btn" type="submit" value="Submit" />
				</div>
			</form>
		)
	}
}
