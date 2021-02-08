// Make sure we wait to attach our handlers until the DOM is fully loaded.
$(document).ready(function () {
  console.info('DOM loaded');

  $(".devour-btn").on("click", function (event) {
    const id = $(this).data("id");
    console.log(id)         // FOR TESTING
    const newStatus = $(this).data("status");
    const newStatusDev = {
      devoured: newStatus,
    };

    const queryURL = `/api/burgers/${id}`;
    $.ajax({
      url: queryURL,      
      type: "PUT",
      data: newStatusDev
    }).then(() => {
     console.log("eaten!", id);
     location.reload("/");
    });
  });

  $(".add-burger").on("submit", function (event) {    
    event.preventDefault();// To preventDefault on a submit event.
    const newBurger = {
      burger_name: $("#new-burger").val().trim()
    };

    // Send the POST request.
    $.ajax("/api/burgers", {
      type: "POST",
      data: newBurger,
    }).then(() =>{
      console.log("New burger created", newBurger );      
      location.reload(); // Reload the page to get the updated list
    });
  });
});
