// Set up a collection to contain player information. On the server,
// it is backed by a MongoDB collection named "players".

Times = new Mongo.Collection("times");

if (Meteor.isClient) {

	Template.timeModule.helpers({
		times: function () {
			// return Users.find();
			return [{_id: 0, start: '2014/11/3', end: '2014/11/7'}, 
					{_id: 1, start: '2014/10/27', end: '2014/10/31'}, 
					{_id: 2, start: '2014/10/20', end: '2014/10/24'}, 
					{_id: 3, start: '2014/10/13', end: '2014/10/17'}, 
					{_id: 4, start: '2014/10/6', end: '2014/10/10'}, 
					{_id: 5, start: '2014/10/08', end: '2014/10/3'}, 
					{_id: 7, start: '2014/10/08', end: '2014/10/15'}, 
					{_id: 6, start: '2014/10/08', end: '2014/10/15'}, 
					{_id: 8, start: '2014/10/08', end: '2014/10/15'}, 
					{_id: 9, start: '2014/10/16', end: '2014/10/23'}];
		}
	});

	Template.time.helpers({
		current: function () {
			Session.get("currentTime") || Session.set("currentTime", 0);
			
			return Session.equals("currentTime", this._id) ? "current" : '';
	    }
	});

	Template.time.events({
		'click': function () {
			Session.set("currentTime", this._id);
		}
	});
}