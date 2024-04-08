var express = require("express");
var ejs = require ("ejs");

var app = express();

app.use(express.static("public"));
app.set("view engine", "ejs");

app.listen(3000);

// Localhost:3000
app.get("/",function(req, res){

    res.render("pages/home")

});

app.get("/home", function(req, res){
    res.render("pages/home")
})

app.get("/about", function(req, res){
    res.render("pages/about")
})

app.get("/contact", function(req, res){
    res.render("pages/contact")
})