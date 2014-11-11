// init mongo celloctions

Times = new Meteor.Collection("times");
Notes = new Meteor.Collection("notes");

if (Meteor.isServer) {
	if (Times.find().count() === 0) {
		// init times list
		Times.insert(
			{start:'2014/11/3', end:'2014/11/7'}
		);
	}
	if (Notes.find().count() === 0) {
		// init notes list
	}
}
