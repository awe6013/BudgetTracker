import React, {Component} from 'react';
import TrackerReact from 'meteor/ultimatejs:tracker-react';

export default class Cat extends Component {
	constructor(){
		super();

		this.state = {
			subscription: {

			}
		};

	}

	componentWillUnmount(){

	}

	componentDidMount(){
		this.getTrans();
	}

	getTrans(){
		let thiz = this;
		Meteor.call("countCatTrans", this.props.cat._id, function(error, result){
			console.log(result);
			thiz.setState({count: result});
			//return result.toString();
		});
	}

	remove(){
		if(window.confirm("Are you sure you want to delete?")){
			Meteor.call("removeCat", this.props.cat._id, function(error){
				if(error){
					window.alert("Error!\n\n"+error.reason);
				}
			});
		}
	}

	render() {

		return (
			<tr id="showhim">
				<td>({this.state.count}) {this.props.cat.label}</td>
				<td><a className="btn" id="showme" onClick={this.remove.bind(this)}>Remove</a></td>
			</tr>
		)
	}
}
