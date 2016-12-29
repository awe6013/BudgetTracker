// Meteor.publish("userSelf", function(){
//
//     const selector = {
//       _id: this.userId
//     };
//
//   const options = {
//     fields: {
//     createdAt: 1,
//     name:1,
//     contact: 1,
//     preferences: 1,
//     bio: 1,
//     phone: 1,
//     howhear: 1,
//     ticket: 1,
//     addresses: 1,
//     affiliations: 1,
//     communitylife: 1,
//     status: 1,
//     newsletter: 1,
//     major: 1,
//     intl:1,
//     gender: 1,
//     ethn: 1,
//     gradterm: 1,
//     curryear: 1,
//     member: 1,
//     memberAt: 1
//      }
//   };
//   return Meteor.users.find(selector, options);
// });
