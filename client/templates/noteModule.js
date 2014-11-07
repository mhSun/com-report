
if (Meteor.isClient) {

	Template.noteModule.helpers({
		notes: function () {
			return Notes.find({}, {sort: {createAt: 1}});
		}
	});

	Template.noteModule.events({
		"click .js-note-new": function () {
			Notes.insert(
				{title: '新建事件', content: '', progress: '', risk: '', timeId: '', createBy: '', createAt: new Date(), updateAt: new Date()}
			);
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
	    }
	});

}
