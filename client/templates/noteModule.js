
if (Meteor.isClient) {

	/* noteModule Template */

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
			/* 添加新事件 */
		},
		"click .js-note-save": function () {
			/* 保存事件的更改 */

			// 保存事件

			// 触发取消点击事件
			$(".js-note-cancel").click();
		},
		"click .js-note-cancel": function () {
			/* 取消事件的更改 */
			// 显示编辑按钮
			$(".js-note-item.absolute").find(".js-note-edit").removeClass("hide");

			// 转为列表显示
			$(".js-note-item").removeClass("absolute").removeClass("hide");

			// 改变菜单栏按钮
			$(".js-note-new").removeClass("hide");
			$(".js-note-save, .js-note-cancel, .js-note-delete").addClass("hide");

			// 取消编辑状态
			$(".js-edit-title, .js-edit-content, .js-edit-progress, .js-edit-risk").attr("contenteditable", "false");
		},
		"click .js-note-delete": function () {
			/* 删除事件 */

			// 删除事件

			// 触发取消点击事件
			$(".js-note-cancel").click();
		}
	});

	/* time Template */

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

	/* note Template */

	Template.note.helpers({
		editable: function () {
			return Meteor.userId() === this.userId ? '' : 'hide';
	    }
	});

	Template.note.events({
		"click .js-note-edit": function (event) {
			/* 进入编辑状态 */
			var editElement = event.currentTarget;
			var currentItem = $(".js-note-item[_id=" + this._id + "]");
			var otherItem = $(".js-note-item[_id!=" + this._id + "]");

			// 隐藏编辑按钮
			editElement.classList.add("hide");
			// 隐藏掉其他列表项
			otherItem.addClass("hide");
			// 设置当前项为全局显示
			currentItem.addClass("absolute");

			// 改变菜单栏按钮
			$(".js-note-new").addClass("hide");
			$(".js-note-save, .js-note-cancel, .js-note-delete").removeClass("hide");

			// 转为可编辑状态
			currentItem.find(".js-edit-title, .js-edit-content, .js-edit-progress, .js-edit-risk").attr("contenteditable", "true");
		}
	});

}
