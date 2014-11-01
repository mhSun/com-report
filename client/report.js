/**
 * Created by menghua.sun on 2014-10-23.
 */
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

		refresh_event();
	});

	$(".user-item").click(function(event) {
		/* Act on the event */
		$(".user-item[current]").removeAttr("current");
		$(this).attr('current', '');

		refresh_event();
	});

	$(".event-item").click(function(event) {
		/* Act on the event */
		$(".event-item[current]").removeAttr("current");
		$(this).attr('current', '');

		refresh_note();
	});

	$(".time-item").click(function(event) {
		/* Act on the event */
		var item = $(this);
		var button = $(".time-value");

		if (button.text() != item.text()) {
			var text = item.text();
			var time = item.attr("time");;
			button.text(text);
			button.attr("time", time);

			refresh_event();
		}
	});

	function refresh_event() {
		var tid = $(".time-text").attr("tid");
		var uid = $(".user-item[current]").attr("uid");

		console.log("刷新事件列表 - " + uid);

		refresh_note();
	}

	function refresh_note() {
		var eid = $(".event-item[current]").attr("eid");

		console.log("刷新事件内容 - " + eid);
	}

});
