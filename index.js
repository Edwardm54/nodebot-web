const express = require("express");
const ejs = require ("ejs");

const app = express();

app.use(express.static("public"));
app.set("view engine", "ejs");

app.listen(3000);

// Localhost:3000
app.get("/",function(req, res){

    res.render("pages/index")

});