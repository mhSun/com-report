// Set up a collection to contain player information. On the server,
// it is backed by a MongoDB collection named "players".

Users = new Mongo.Collection("users");

if (Meteor.isClient) {

	Template.userModule.helpers({
		users: function () {
			// return Users.find();
			return [{_id: 0, name: 'test1'}, {_id: 1, name: 'test2'}, {_id: 2, name: 'test3'}];
		}
	});

	Template.user.helpers({
		current: function () {
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

	Meteor.startup(function () {
		if (Users.find().count() === 0) {
			var names = ["Ada Lovelace", "Grace Hopper", "Marie Curie", "Carl Friedrich Gauss", "Nikola Tesla", "Claude Shannon"];
			_.each(names, function (name) {
				Users.insert({
					name: name
				});
			});
		}
	});
}
