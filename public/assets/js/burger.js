// Make sure we wait to attach our handlers until the DOM is fully loaded.
$(document).ready(function () {
  console.info('DOM loaded');

  $("#devour-btn").on("click", function () {
    let id = $(this).data("index");
    console.log(id)         // FOR TESTING
    var queryURL = `/api/burgers/${id}`;
    console.log(queryURL) 
    $.ajax({
      url: queryURL,      
      method: "PUT"
    }).then(() => {
     console.log("eaten: ", result);
     location.reload("/");
    });
  });
});
