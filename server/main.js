// SyncedCron.start();
// SyncedCron.add({
//   name: 'CalculateFunnel',
//   schedule: function(parser) {
//     // parser is a later.parse object
//     return parser.recur().on("23:59:59").time();
//   },
//   job: function() {
//     var result = Contacts.aggregate([{$group: {_id: "$status", count: {$sum: 1}}}]);
//     var rst ={};
//     result.forEach((status)=>{
//       rst[status._id] = status.count;
//     });
//     rst.timestamp = new Date();
//     FunnelHistory.insert(rst);
//   }
// });
// SyncedCron.add({
//   name: 'BackupContactsAttendance',
//   schedule: function(parser) {
//     // parser is a later.parse object
//     return parser.recur().on("00:00:59").time();
//   },
//   job: function() {
//     ContactsBackup.insert({contacts:Meteor.users.find().fetch(), timestamp: new Date()});
//     EventsAttendanceBackup.insert({events: Events.find({},{name: 1, start: 1, attendees: 1}).fetch(), timestamp: new Date()});
//   }
// });
//Cats.insert({label: "Test"});
