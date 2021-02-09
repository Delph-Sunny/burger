// Make sure we wait to attach our handlers until the DOM is fully loaded.
$(document).ready(function () {
  console.info("DOM loaded");

  $(".devour-btn").on("click", function (event) {
    const id = $(this).data("id");
    let newStatus = $(this).data("status");
    if (newStatus === 0) newStatus += 1;  // Change status from false to true
    const newStatusDev = {
      devoured: newStatus,
    };

    const queryURL = `/api/burgers/${id}`;
    $.ajax({
      url: queryURL,      
      type: "PUT",
      data: newStatusDev
    }).then(() => {
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
      location.reload(); // Reload the page to get the updated list
    });
  });
});
