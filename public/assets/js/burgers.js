// Creating a new burger
$("#createBurger").on("submit", (e) => {
    e.preventDefault();

    let newBurger = {
        burgerName: $("#createBurger [name=burgerName]").val().trim()
    };

    $.ajax("/api/burgers", {
        type: "POST",
        data: newBurger
    }).then(() => {
        console.log("Created new burger!");
        location.reload();
    });
});

// Updating a burger in the list and changing its devoured column from false to true
$(".updateBurger").on("click", function() {
    let id = $(this).attr("burger-id");

    $.ajax("/api/burgers/" + id, {
        type: "PUT"
    }).then(() => {
        console.log("You devoured the burger!");
        location.reload();
    });
});