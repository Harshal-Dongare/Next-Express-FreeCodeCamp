// Set up the server using Express

// import express package
const express = require("express");

// create the instance of Express
const app = express();

// This is short hand for both import module and invoking the instance together
// const app = require('express')();

app.get("/", (req, res) => {
    res.status(200).send("Home Page");
});

app.get("/about", (req, res) => {
    res.status(200).send("About Page");
});

app.all("*", (req, res) => {
    res
        .status(404)
        .send("<h1>404-Not found: The requested page is not available</h1>");
});

const port = 5000;
app.listen(port, () => {
    console.log(`Server is listening on ${port}...`);
});
