$(function() {
    // $(".change-sleep").on("click", function(event) {
    //     var id = $(this).data("id");
    //     var newSleep = $(this).data("newsleep");

    //     var newSleepState = {
    //         sleepy: newSleep
    //     };

    //     // Send the PUT request.
    //     $.ajax("/api/cats/" + id, {
    //         type: "PUT",
    //         data: newSleepState
    //     }).then(
    //         function() {
    //             console.log("changed sleep to", newSleep);
    //             // Reload the page to get the updated list
    //             location.reload();
    //         }
    //     );
    // });

    $(".create-form").on("submit", function(event) {
        // Make sure to preventDefault on a submit event.
        event.preventDefault();

        const newBurger = {
            name: $("#new-burger").val().trim(),
        };

        // Send the POST request.
        $.ajax("/api/burgers", {
            type: "POST",
            data: newBurger
        }).then(
            function() {
                console.log("created new burger");
                // Reload the page to get the updated list
                location.reload();
            }
        );
    });

    // $(".delete-cat").on("click", function(event) {
    //     // console.log($(event.target).data("id"));
    //     let id = $(event.target).data("id");
    //     let query = `/api/cats/${id}`;
    //     $.ajax(query, {
    //         type: "DELETE",
    //     }).then(
    //         function() {
    //             console.log("created new cat");
    //             // Reload the page to get the updated list
    //             location.reload();
    //         }
    //     );
    // });
});