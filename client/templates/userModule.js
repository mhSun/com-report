// Set up a collection to contain player information. On the server,
// it is backed by a MongoDB collection named "players".

Users = new Mongo.Collection("users");

if (Meteor.isClient) {

	Template.userModule.helpers({
		users: function () {
			return Users.find({});
			return [{_id: 0, name: 'test1'}, 
					{_id: 1, name: 'test2'}, 
					{_id: 2, name: 'test3'}, 
					{_id: 3, name: 'test4'}, 
					{_id: 4, name: 'test5'}, 
					{_id: 5, name: 'test6'},
					{_id: 6, name: 'test7'}, 
					{_id: 7, name: 'test8'},  
					{_id: 8, name: 'test9'}, 
					{_id: 9, name: 'test10'}];
		}
	});

	Template.user.helpers({
		current: function () {
			Session.get("currentUser") || Session.set("currentUser", 0);

			return Session.equals("currentUser", this._id) ? "current" : '';
	    }
	});

	Template.user.events({
		'click': function () {
			Session.set("currentUser", this._id);
		}
	});
}

// On server startup, create some players if the database is empty.
if (Meteor.isServer) {

	// Meteor.startup(function () {
	// 	Users.insert({name: "test1"});
	// 	Users.insert({name: "test2"});
	// });
}
