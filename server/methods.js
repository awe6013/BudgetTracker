import { Accounts } from 'meteor/accounts-base';

Meteor.methods({
  countCatTrans(id){
    return Trans.find({category: id}).fetch().length;
  }

})
