var connection = require("./connection.js");

//creation of a function to handle  inserting ? into
function printQuestionMarks(num) {
    var arr = [];

    for (var i = 0; i < num; i++) {
        arr.push("?");
    }
    return arr.toString();
};

// selectAll() = Select * from burgers (will get everything from burgers).
//ORM will control different functions to control query request. 
var orm = {
    selectAll: function(whatToSelect, tableInput, cb) {
        var queryString = "SELECT * FROM" + tableInput + ";";
        connection.query(queryString, [whatToSelect, tableInput],
            function(error, result) {
                if (error) throw error;
                cb(result);
            });
    },
    //INSERT INTO burgers (burger_name, devoured) VALUES ('juicy lucy', false);
    insertOne: function(table, colm, value, final) {
        var queryString = "INSERT INTO " + table;

        //build the querry string to insert the information.
        queryString += "(";
        queryString += colm.toString();
        queryString += ") ";
        queryString += "VALUES (";
        queryString += printQuestionMarks(value.length);
        queryString += ") ";

        console.log(queryString); //insure the correct query is created.

        connection.query(queryString, value, function(error, result) {
            if (error) throw error;
        });
    },
    //update query function
    update: function(table, objColVal, condition, cb) {
        var queryString = "UPDATE " + table;

        queryString += " SET ";
        queryString += objColVal(objColVal);
        queryString += "WHERE ";
        queryString += condition;

        console.log(queryString);
        connection.query(queryString, function(error, result) {
            if (error) throw error;

            cb(result) //run back the results in the call back.
        });
    },
    // //delete query for mysql
    // delete: function(table, condition, cb) {
    //     var queryString = "DELETE FROM " + table;
    //     queryString += " WHERE ";
    //     queryString += condition;

    //     connection.query(queryString, function(error, result) {
    //         if (error) { throw error; }

    //         cb(result);
    //     });
    // }
};

// updateOne()
module.exports = orm;