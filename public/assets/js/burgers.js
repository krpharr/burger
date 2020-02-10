$(function() {
    $(".devour").on("click", function(event) {
        var id = $(this).data("id");
        $.ajax("/api/burgers/" + id, {
            type: "PUT",
            data: { devoured: true }
        }).then(
            function() {
                console.log("yummy...");
                location.reload();
            }
        );
    });

    $(".create-form").on("submit", function(event) {
        event.preventDefault();
        const newBurger = {
            name: $("#new-burger").val().trim(),
        };
        $.ajax("/api/burgers", {
            type: "POST",
            data: newBurger
        }).then(
            function() {
                console.log("created new burger");
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