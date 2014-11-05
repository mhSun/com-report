// Set up a collection to contain player information. On the server,
// it is backed by a MongoDB collection named "players".

Notes = new Mongo.Collection("notes");

if (Meteor.isClient) {

	Template.noteModule.helpers({
		notes: function () {
			// return Users.find();
			return [{_id: 0, time: '2014年11月3日 20:20:20', title: 'title', content: 'content', progress: 'progress', risk: 'risk'},
					{_id: 1, time: '2014年11月3日 20:30:30', title: 'title', content: 'content', progress: 'progress', risk: 'risk'},
					{_id: 2, time: '2014年11月3日 20:30:30', title: 'title', content: 'content', progress: 'progress', risk: 'risk'},
					{_id: 3, time: '2014年11月3日 20:30:30', title: 'title', content: 'content', progress: 'progress', risk: 'risk'},
					{_id: 4, time: '2014年11月3日 20:40:40', title: 'title', content: 'content', progress: 'progress', risk: 'risk'}];
		}
	});

	Template.note.helpers({
		current: function () {
			return Session.equals("currentNote", this._id) ? "current" : '';
	    }
	});
}