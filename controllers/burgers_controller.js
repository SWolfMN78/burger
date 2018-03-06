var express = require("express");
var burgersMod = require("../config/burgers.js");
var router = express.Router();

//set the router information - first the base localhost page on load ie /
router.get("/", function(req, result) {
    burgersMod.all(function(data) {
        var startObj = {
            burgers: data
        };
        console.log("And your data is: " + startObj);
        result.render("index", startObj);
    });
});