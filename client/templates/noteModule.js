
if (Meteor.isClient) {

	Template.noteModule.helpers({
		times: function () {
			return Times.find();
		},
		notes: function () {
			return Notes.find({userId: Session.get("currentUser"), timeId: Session.get("currentTime")}, {sort: {createAt: 1}});
		},
		status: function () {
			return Meteor.user() ? "account-in" : "account-out";
		}
	});

	Template.noteModule.events({
		"click .js-note-new": function () {
			Notes.insert(
				{
					title: '新建事件',
					content: '',
					progress: '',
					risk: '',
					timeId: Session.get("currentTime"),
					userId: Meteor.userId(),
					createAt: new Date(),
					updateAt: new Date()
				}
			);
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

	Template.note.helpers({
		editable: function () {
			return Meteor.userId() === this.userId;
	    }
	});

	Template.note.events({
		'blur': function (events) {
			var key = events.target.classList[1];
			var value = events.target.innerHTML;
			
			if (key === "title") {
				Notes.update(this._id,
					{$set: {title: value, updateAt: new Date()}}
				);
			} else if (key === "content") {
				Notes.update(this._id,
					{$set: {content: value, updateAt: new Date()}}
				);
			} else if (key === "progress") {
				Notes.update(this._id,
					{$set: {progress: value, updateAt: new Date()}}
				);
			} else if (key === "risk") {
				Notes.update(this._id,
					{$set: {risk: value, updateAt: new Date()}}
				);
			}

			events.stopPropagation();
			// return false;
	    }
	});

}
