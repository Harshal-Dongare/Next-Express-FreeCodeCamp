const express = require("express");
const app = express();

const { products } = require("./data.js");

app.get("/", (req, res) => {
  console.log("User hit the resource");
  res.send('<h1>Home Page</h1><a href="./api/products">Products</a>');
});

// send selective data
app.get("/api/products", (req, res) => {
  const newProduct = products.map((product) => {
    // selects selective data from the original products array present in data.js
    const { id, name, image } = product;

    // it will update the newProduct array
    return { id, name, image };
  });
  res.json(newProduct);
});

// send specific product
app.get("/api/products/:productID", (req, res) => {
  // other way to destructure query parameters
  // const { productID } = req.params;

  const productID = Number(req.params.productID);
  const singleProduct = products.find((product) => {
    return product.id === productID;
  });

  // if product does not exist
  if (!singleProduct) {
    return res.status(400).send("Product does not exist");
  }

  res.json(singleProduct);
});

// Some complex route parameters
app.get("/api/products/:productID/reviews/:reviewID", (req, res) => {
  console.log(req.params);
  res.send("Hello world!");
});

const port = 5000;

app.listen(port, (err) => {
  if (err) {
    console.log(err.message);
    process.exit(1);
  }
  console.log(`Server is listening on port ${port}`);
});
