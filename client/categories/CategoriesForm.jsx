import React from 'react';
import TrackerReact from 'meteor/ultimatejs:tracker-react';


export default class CategoriesForm extends TrackerReact(React.Component) {
	constructor(){
		super();


	}

	componentWillUnmount(){

	}

	componentDidMount(){
		$('select').material_select();
	}


	submit(event){
		event.preventDefault();
		//perform transaction submit
		Meteor.call("addCat",
			this.refs.cat.value,
			this.refs.type.value,
			function(error, result){
				if(error){
					//window.alert("Something went wrong. Check the ");
					console.log("Something went wrong.");
					console.log(error);
				}
			}
			);
		Materialize.toast("Category '"+this.refs.cat.value+"' has been successfully added", 4000);
		this.clearForm();
		this.refs.cat.focus();
	}

	clearForm(){
		//this.setState({cat: ""});
		this.refs.cat.value="";
		//this.refs.type.value="";
	}

	// Still need to add Meteor method to add new CategoriesForm
	// and add all of the categories


	render() {
		return (
			<form onSubmit={this.submit.bind(this)}>
				<div className="row">
					<div className="input-field col s12 l6">
						<input type="text" name="cat" ref="cat" required />
						<label htmlFor="cat">New Category Name</label>
					</div>
					<div className="input-field col s12 l6">
						<select ref="type">
							<option value="Income">Income</option>
							<option value="Necessary Expenses">Necessary Expenses</option>
							<option value="Discretionary Expenses">Discretionary Expenses</option>
							{/*<option value="Investment Spending">Investment Spending</option>*/}
						</select>
					</div>
				</div>

				<div className="row">
					<input className="btn" type="submit" value="Submit" />
				</div>
			</form>
		)
	}
}
