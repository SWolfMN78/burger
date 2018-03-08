var express = require("express");
var bodyPar = require("body-parser");
var mySQL = require("mysql");
var expHndlB = require("express-handlebars")
var app = express();

//set up the port that will be connected to
var PORT = process.env.PORT || 3000

//set up application uses.
app.use(express.static("public"));
//parse application using x-www-form-urlencoded
app.use(bodyPar.urlencoded({ extended: false }));

//parse application/json
app.use(bodyPar.json());

//get handlebars set up
app.engine("handlebars", expHndlB({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

var router = require("./controllers/burgers_controller.js");
app.use("/", router);

//open the server and kick our msg
app.listen(PORT, function() {
    console.log("App is listening on PORT: " + PORT);
});