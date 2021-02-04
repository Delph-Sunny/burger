//Server generated
const express = require("express");
const path = require("path");

// EXPRESS CONFIGURATION
const app = express();
// Sets an initial port
const Port = process.env.PORT || 8080;
// Sets up the Express app to handle data parsing
app.use(express.urlencoded({ extended: false }));
app.use(express.json());
// Serving static files in Express, so it will load the files that are in the public directory
app.use(express.static(path.join(__dirname, "public")));

// Set Handlebars.
const exphbs = require("express-handlebars");
app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

// Import routes and give the server access to them.
const routes = require("./controllers/burgers_controller.js");

app.use(routes);


// LISTENER
app.listen(PORT, (err) => {
    if (err) {
       console.log(err)
   } else {
       console.log(`Server is listening on: http://localhost:${PORT}`);
    }
});
