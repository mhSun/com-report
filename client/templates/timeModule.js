
if (Meteor.isClient) {

	Template.timeModule.helpers({
		times: function () {
			return Times.find();
		}
	});

	Template.time.helpers({
		current: function () {
			Session.get("currentTime") || Session.set("currentTime", Times.findOne()._id);
			
			return Session.equals("currentTime", this._id) ? "current" : '';
	    }
	});

	Template.time.events({
		'click': function () {
			Session.set("currentTime", this._id);
		}
	});
}