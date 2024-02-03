const express = require("express");
const path = require("path");

const app = express();

/* middleware to serve static files, 
allowing direct access to files in the specified directory */
app.use(express.static("./public/"));

// we don't need to send static files using .sendFile() when we use express.static() method
// app.get("/", (req, res) => {
//   // create a path
//     const filePath = path.resolve(__dirname, "./navbar-app/", "index.html");

//   // send file to the client
//     res.sendFile(filePath);
// });

app.all("*", (req, res) => {
    res.status(400).send("Resource Not Found");
});

const port = 5000;
app.listen(port, (err) => {
    if (err) {
        console.log(err.message);
        process.exit(1);
    }
    console.log(`Server is listening on ${port}...`);
});
