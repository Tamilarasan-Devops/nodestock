//Creates an Express application. The express() function is a top-level function exported by the express module.

const express = require("express");
const path = require("path");

// create express handlebars

const exphbs = require("express-handlebars");

const app = express();



// setting port to be used while web hosting

const PORT = process.env.PORT || 5000;

// Register `hbs.engine` with the Express app. - set handlebars middleware
app.engine('handlebars', exphbs.engine());
app.set('view engine', 'handlebars');


// set handlebar routes for dynamic pages
app.get('/', (req, res) => {
    res.render('home');
});

// set static folder

app.use(express.static(path.join(__dirname, "public")));


// informing the app to listen on the port and display some message

app.listen(PORT, () => console.log("Server listening on port " + PORT));

console.log("Stock market app");