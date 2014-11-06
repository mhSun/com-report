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
	});

});