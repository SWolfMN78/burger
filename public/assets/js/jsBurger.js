$(function() {
    $(".change-devoured").on("click", function(event) {
        var id = $(this).data("id");
        var newDevour = $(this).data("newDevour");

        var devourState = {
            devoured: newDevour
        };

        //send PUT request
        $.ajax("/api/burgers/" + id, {
            type: "PUT",
            data: devourState
        }).then(
            function() {
                console.log("changed devoured to", newDevour);
                //reload the page to get the updated list on info
                location.reload();
            }
        );
    });

    $(".create-form").on("submit", function(event) {
        //input a preventDefault upon the submit event.
        event.preventDefault();

        var newBurger = {
            name: $("#ca").val().trim(),
            sleepy: $("[name=devoured]:checked").val().trim()
        };

        $.ajax("/api/burgers", {
            type: "POST",
            data: newBurger
        }).then(
            function() {
                console.log("created a new burger!!");
                location.reload();
            }
        );
    });

    $(".delete-burger").on("click", function(event) {
        var id = $(this).data("id");

        //send the DELETE request
        $.ajax("/api/burgers/" + id, {
            type: "DELETE",
        }).then(
            function() {
                console.log("Deleted a burger sir", id);
                location.reload();
            }
        );
    });
});