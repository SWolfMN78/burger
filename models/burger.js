//tell the application to use the orm.js file.
var orm = require("../config/orm.js");

var burger = {
    selectAll: function(cb) {
        orm.selectAll("burgers", function(cb) {
            cb(res);
        });
    },
    insertOne: function(column, value, cb) {
        orm.insertOne("burger_name", column, value, function(res) {
            cb(res);
        });
    },
    update: function(objColValue, condition, cb) {
        orm.update("burger_name", objColValue, condition, function(res) {
            cb(res);
        });
    }
};

//export the dba infomation for other parts of the application to use.
module.exports = burger;