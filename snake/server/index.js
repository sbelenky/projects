var ws = require("nodejs-websocket");

var server = ws.createServer(function(conn) {
	conn.on('text', function(str) {
		console.log(str + " has connected.");
	});
});

server.listen(8050, function() {
	console.log("Begin listening.");
});