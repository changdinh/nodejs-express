"use strict";
const express = require("express");
const app = express();

app.use(express.static('public'));

app.get("/", (req, res) => {
    console.log(req.url);
    res.send("<h1>Hello World</h1>");
});

app.get("/old", (req, res) => {
    res.redirect(301, "/new");
});

app.get("/new", (req, res) => {
    res.send("<h2>New</h2>");
});

app.listen(3000, err => {
    if(err) {
        console.log("There was a problem", err);
        return;
    }
    console.log("listening on port 3000");
});