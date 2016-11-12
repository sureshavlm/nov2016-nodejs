var express = require('express'); // import express
var fs = require('fs'); //built-in by nodeJS

var app = express();

/* 	GET, POST, PUT, DELETE and OPTIONS */

//http://localhost:3000/queryProducts
app.get('/queryProducts', function(req, res) {
	console.log("Querying products");

	res.json([{name: "iPhone7", price:600}, {name: "Mac Book Pro", price:1700}]);

});

/* REST End point http://localhost:3000/login */
app.post("/login", function(req, res) {
	//validate against DataBase tables
	res.end("<h1>You have successfully logged in!</h1>");
});

app.listen(8080, function() {
	console.log("Server started on port 8080");
});