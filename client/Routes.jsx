import React from 'react';
import {mount} from 'react-mounter';

//Layouts
import {MainLayout} from './layouts/MainLayout.jsx';
import {ErrorLayout} from './layouts/ErrorLayout.jsx';

//Wrappers
import ErrorPage from './layouts/ErrorPage.jsx';
import DashboardWrapper from './Dashboard.jsx';



function signInForceCheck(context) {
  // context is the output of `FlowRouter.current()`
	if(context.path.substring(0,6)!="/login"
		&&context.path.substring(0,7)!="/signup"
		&&context.path!="/newcontact"
		&&context.path!="/forgotpassword"
	){
		if(!Meteor.userId()){
			FlowRouter.go("/login?r="+context.path);
		}
	}
}


// FlowRouter.triggers.enter([signInForceCheck]);

FlowRouter.route('/',{
	action() {
		mount(MainLayout, {
			header: "Dashboard",
			content: (<DashboardWrapper />)
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
