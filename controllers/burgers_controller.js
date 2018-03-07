var express = require("express");
var burgersMod = require("../config/burgers.js");
var router = express.Router();

//set the router information - first the base localhost page on load ie /
router.get("/", function(req, result) {
    burgersMod.selectAll(function(data) {
        var startObj = {
            burgers: data
        };
        console.log("And your data is: " + startObj);
        result.render("index", startObj);
    });
});

//post the information to the website for use.
router.post("/api/burgers", function(req, result) {
    burgersMod.insertOne([
        "name", "devoured"
    ], [
        req.body.burger_name, req.body.devoured
    ], function(result) {
        result.json({ id: result.insertId })
    });
});