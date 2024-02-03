// query parameters

const express = require("express");
const app = express();

const { products } = require("./data.js");

app.get("/api/v1/query", (req, res) => {
    console.log(req.query);

    // destructure search and limit values from req.query object
    const { search, limit } = req.query;

    let sortedProducts = [...products];

    if (search) {
        sortedProducts = sortedProducts.filter((product) => {
        return product.name.startsWith(search);
        });
    }
    if (limit) {
        sortedProducts = sortedProducts.slice(0, Number(limit));
    }

    // if sortedProduct has no products which means it's length is 0
    if (sortedProducts.length < 1) {
        return res.status(200).send(`No products starting with ${search}`);

        // other way using sending json
        // return res.status(404).json({success: true, data: []})
    }

    res.status(200).json(sortedProducts);
});

const port = 5000;

app.listen(port, (err) => {
    if (err) {
        console.log(err.message);
        process.exit(1);
    }
    console.log(`Server is listening on port ${port}`);
});
