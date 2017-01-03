import { Accounts } from 'meteor/accounts-base';
// if(!Meteor.userId()){
//   console.log(FlowRouter.getRouteName());
//   console.log(FlowRouter.current());
//   FlowRouter.go("/login");
// }

document.title="Tracer";

Meteor.subscribe("userSelf");
Meteor.subscribe("MyCategories");

// Accounts.onEnrollmentLink(function(token,done){
//   //Accounts.resetPassword()
//   FlowRouter.go("/signup/"+token);
// });
//
if ($) {
  Vel = $.Velocity;
}
else {
  Vel = Velocity; // change value with jQuery.Velocity
}
