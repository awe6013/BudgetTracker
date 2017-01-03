import React from 'react';
import TrackerReact from 'meteor/ultimatejs:tracker-react';
//import Select from 'react-select';
import Combobox from 'react-widgets/lib/Combobox';
import DateTimePicker from 'react-widgets/lib/DateTimePicker';
import moment from 'moment';
import momentLocalizer from 'react-widgets/lib/localizers/moment';

// Be sure to include styles at some point, probably during your bootstrapping
//import 'react-select/dist/react-select.css';

export default class TransactionForm extends TrackerReact(React.Component) {
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
		Meteor.call("recordTrans",
			this.refs.paidto.value,
			this.state.cat,
			this.state.date,
			this.refs.desc.value,
			amt);
		console.log("Paid To: ", this.refs.paidto.value);
		console.log("Category: ", this.state.cat);
		console.log("Date: ", this.state.date);
		console.log("Description: ", this.refs.desc.value);
		console.log("Amount: ", amt);
		this.clearForm();
		Materialize.toast("Transaction submission of amount: $"+amt+ " was successful.", 4000);
	}

	clearForm(){
		this.setState({cat: ""});
		this.refs.paidto.value="";
		this.refs.desc.value="";
		this.refs.amt.value="";
	}


	getOptions(){
		// var options = [
	  //   { value: 'one', label: 'One' },
	  //   { value: 'two', label: 'Two' }
		// ];
		//return options;
		var options = Cats.find({type: {$ne: "Income"}}).fetch();
		// options.forEach((option)=>{
		// 	option.value=option._id;
		// });
		return options;
	}





	// SPENDING
	// To who
	// description
	// date (filled in for now by default, but can be changed)
	// amount
	// category

	// INCOME
	// category
	// Date (filled in for now by default, but can be changed)
	// amount


	render() {
		return (
			<form onSubmit={this.submit.bind(this)}>
				<div className="row">
					<div className="input-field col s12">
						<input type="text" name="paidto" ref="paidto" required />
						<label htmlFor="paidto">Paid To</label>
					</div>
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
						    name="category"
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
					<div className="col s12">
						<label htmlFor="desc">Description</label>
						<textarea className="browser-default" required name="desc" ref="desc" style={{maxWidth:"100%"}} />
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
