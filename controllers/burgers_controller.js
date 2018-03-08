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

//put the information up on the site
router.put("/api/burgers/:id", function(req, res) {
    var condition = "id = " + req.params.id;

    console.log("condition", condition);

    burgersMod.update({
        devoured: req.body.devoured
    }, condition, function(result) {
        if (result.changedRows == 0) {
            //If no rows are changed then ID = 0, throw 404
            return res.status(404).end();
        } else {
            res.status(200).end();
        }
    });
});

//may need to delete at a later date - Save for later.