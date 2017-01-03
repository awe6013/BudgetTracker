import { Accounts } from 'meteor/accounts-base';
Meteor.methods({

  // matchUserContact(uid, cid, eml){
  //   Meteor.users.update(uid, {$set:{contact: cid}});
  //   Meteor.users.update(uid, {$set:{email: eml}});
  // },
  addCat(val, typ){
    return Cats.insert({user: Meteor.userId(), label: val, type: typ});
  },
  removeCat(id){
    if(Trans.find({category: id}).fetch().length>0){
      throw new Meteor.Error("trans-exist",
      'Transactions exist on this category. Cannot delete.\n'+
      "Please edit transactions if you wish to delete.");
    }
    else{
      Cats.remove({_id: id});
    }
  },
  recordTrans(payto, cat,dte, dsc, amt){
    Trans.insert({
      paidto: payto,
      category: cat,
      date: dte,
      description: dsc,
      amount: amt,
      timestamp: new Date(),
      user: Meteor.userId()
    });
  },
  recordIncome(cat, dte, amt){
    Trans.insert({
      category: cat,
      date: dte,
      amount: amt,
      timestamp: new Date(),
      user: Meteor.userId()
    });
  }

})
