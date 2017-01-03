Meteor.publish("userSelf", function(){

    const selector = {
      _id: this.userId
    };

  const options = {
    fields: {
    createdAt: 1,
    name:1
   }
  };
  return Meteor.users.find(selector, options);
});

Meteor.publish("MyTransactions", function(){
  return Trans.find({user: this.userId});
});

Meteor.publish("allCategories", function(){
  return Cats.find();
});

Meteor.publish("MyCategories", function(){
  return Cats.find({user: this.userId});
});
