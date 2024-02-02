const http = require("http");

const server = http.createServer((req, res) => {
    // route handlers
    if (req.url === "/") {
        res.end("Welcome the our home page!");
    } else if (req.url === "/about") {
        res.end("Here is our short history");
    } else {
        res.end(`
            <h1>Opss!</h1>
            <p>Sorry, we can't find what you are looking for.</p>
            <a href = '/'>Back Home</a>
        `);
    }
    });

    const portNumber = 3000; // port number

    // listen on the specified port
    server.listen(portNumber, (err) => {
    if (err) {
        // if there is an error during server startup
        console.log("Error starting the server ", err.message);
        process.exit(1);
    }

    // if the server starts successfully
    console.log(`Server is listening on port ${portNumber}`);
});
