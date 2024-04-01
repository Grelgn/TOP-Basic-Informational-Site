const http = require("http");

const server = http.createServer((req, res) => {
	res.end("<h1>test</h1>");
});

server.listen(8080, () => {
	console.log("Server is running...");
});
