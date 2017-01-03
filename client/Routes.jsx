import React from 'react';
import {mount} from 'react-mounter';

//Layouts
import {MainLayout} from './layouts/MainLayout.jsx';
import {FormLayout} from './layouts/FormLayout.jsx';
import {ErrorLayout} from './layouts/ErrorLayout.jsx';

//Wrappers
import ErrorPage from './layouts/ErrorPage.jsx';
import DashboardWrapper from './Dashboard.jsx';
//######   Login stuff    #######
import LoginWrapper from './user/LoginWrapper.jsx';
import SignUpWrapper from './user/SignUpWrapper.jsx';
import ForgotPassword from './user/ForgotPassword.jsx';
import ChangePassword from './user/ChangePassword.jsx';
// #################################
// #######   Summary ############
import SummaryWrapper from './summary/SummaryWrapper.jsx';
// #################################3
// #######   Manage Categories   #########
import CategoriesWrapper from './categories/CategoriesWrapper.jsx';
// ##############################################



function signInForceCheck(context) {
  // context is the output of `FlowRouter.current()`
	if(context.path.substring(0,6)!="/login"
		&&context.path.substring(0,7)!="/signup"
		&&context.path!="/forgotpassword"
	){
		if(!Meteor.userId()){
			FlowRouter.go("/login?r="+context.path);
		}
	}
}

function subscribeContactSelf(){
	Meteor.subscribe("userSelf");
}

FlowRouter.triggers.enter([signInForceCheck]);

FlowRouter.route('/',{
	action() {
		mount(MainLayout, {
			header: "Dashboard",
			content: (<DashboardWrapper />)
		})
	}
});

FlowRouter.route('/login', {
	action(params, queryParams) {
		mount(FormLayout,  {
			content: (<LoginWrapper route={queryParams.r} />)
		})
	},
	triggersExit: [subscribeContactSelf]
});

FlowRouter.route('/signup', {
	action() {
		mount(FormLayout, {
			content: (<SignUpWrapper />)
		})
	},
	triggersExit: [subscribeContactSelf]
});

FlowRouter.route('/changepassword', {
	action() {
		mount(MainLayout, {
			header: "My Account",
			content: (<ChangePassword />)
		})
	}
});

FlowRouter.route('/forgotpassword', {
	action() {
		mount(FormLayout, {
			content: (<ForgotPassword />)
		})
	}
});

FlowRouter.route("/summary", {
	action(){
		mount(MainLayout, {
			header: "Transaction Summary",
			content: (<SummaryWrapper />)
		})
	}
});

FlowRouter.route("/categories", {
	action(){
		mount(MainLayout, {
			header: "Manage Categories",
			content: (<CategoriesWrapper />)
		})
	}
});

// FlowRouter.route('/admin/users/:uid', {
// 	action(params) {
// 		mount(MainLayout, {
// 			header: "Administration",
// 			content: <UserManagementWrapper uid={params.uid} />
// 		})
// 	}
// });



FlowRouter.notFound = {
  action() {
    mount(ErrorLayout, {
				content: (<ErrorPage />)
			}
		)
  }
};
