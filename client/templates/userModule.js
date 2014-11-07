// Set up a collection to contain user information. On the server,
// it is backed by a MongoDB collection named "users".

if (Meteor.isClient) {

	Template.userModule.helpers({
		users: function () {
			return Users.find();
		}
	});

	Template.user.helpers({
		current: function () {
			Session.get("currentUser") || Session.set("currentUser", Users.findOne()._id);

			return Session.equals("currentUser", this._id) ? "current" : '';
	    }
	});

	Template.user.events({
		'click': function () {
			Session.set("currentUser", this._id);
		}
	});

	$(function(){

		$(".user-search input").change(function(event) {
			/* Act on the event */
			var search = $(".user-search input").val();
			var user_list = $(".user-item");

			if (search) {
				var reg = new RegExp(search);
				user_list.each(function(){
					if(reg.test($(this).text())){
						$(this).removeClass('hide');
					} else {
						$(this).addClass('hide');
					}
				});
			} else {
				user_list.removeClass('hide');
			}
		});

	});
}