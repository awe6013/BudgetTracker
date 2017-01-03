import React from 'react';
import TrackerReact from 'meteor/ultimatejs:tracker-react';
//import SignInButtonWrapper from '/client/user/SignInButtonWrapper.jsx';


export default class SideBar extends TrackerReact(React.Component) {
	constructor(){
		super();

		this.state = {
			subscription: {

			}
		}


	}

	componentDidMount(){
		$(".dropdown-button").dropdown();
	}

	componentDidUpdate(){
		$(".dropdown-button").dropdown();
		$(".button-collapse").sideNav();
		$('.collapsible').collapsible();
	}


	render(){
		return(

		<ul id="nav-mobile" className="side-nav z-depth-1 fixed" >
			<li className="no-padding">
				<ul className="collapsible collapsible-accordion">
					<li className={FlowRouter.current().path=="/"?"active":""}>
						<a href="/" className="waves-effect collapsible-header">
							<i className="material-icons">dashboard</i>My Dashboard</a>
					</li>
					<li className={FlowRouter.current().path=="/summary"?"active":""}>
						<a href="/summary" className="waves-effect collapsible-header">
							<i className="material-icons">receipt</i>Transaction Summary</a>
					</li>
					<li className={FlowRouter.current().path=="/categories"?"active":""}>
						<a href="/categories" className="waves-effect collapsible-header">
							<i className="material-icons">view_headline</i>Manage Categories</a>
					</li>
				</ul>
			</li>
		</ul>

		)

	}
}
