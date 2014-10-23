/**
 * Created by menghua.sun on 2014-10-23.
 */
$(function(){

	$(".time-item").click(function(event) {
		/* Act on the event */
		var item = $(this);
		var button = $(".time-value");

		if (button.text() != item.text()) {
			var text = item.text();
			var time = item.attr("time");;
			button.text(text);
			button.attr("time", time);

			refresh_name();
		}
	});

	$(".user-search").change(function(event) {
		/* Act on the event */
		refresh_name();
	});

	$(".user-item").click(function(event) {
		/* Act on the event */
		$(".user-item[current]").removeAttr("current");
		$(this).attr('current', '');

		refresh_node();
	});

	$(".nav-tool-refresh").click(function(event) {
		/* Act on the event */
		refresh_name();
	});

	function refresh_name () {
		var time = $(".time-value").attr("time");
		var search = $(".user-search").val();

		console.log("刷新用户列表 - " + time + " - " + search);

		refresh_node();
	}

	function refresh_node () {
		var user = $(".user-item[current]").attr("user");

		console.log("刷新事件列表 - "+user);
	}
});
