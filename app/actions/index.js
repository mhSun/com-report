/**
 * actions/index.js
 *
 */

var server = rapid.use("rapid-httpserver");

server.defineAction("index", function(){
	var content = this.render("index");
    //发送到前端
    this.send(content);
});