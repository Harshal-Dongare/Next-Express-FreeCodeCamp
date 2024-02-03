// API vs SSR

const express = require("express");
const app = express();

const { products } = require("./data.js");
app.get("/", (req, res) => {
    res.status(200).json(products);
});

const port = 5000;

app.listen(port, (err) => {
    if (err) {
        console.log(err.message);
        process.exit(1);
    }
    console.log(`Server is listening on port ${port}`);
});
