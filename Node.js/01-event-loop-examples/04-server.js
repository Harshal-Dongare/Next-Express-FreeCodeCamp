// import built-in http module
const http = require("http");

const server = http.createServer((req, res) => {
  res.write("Welcome to planet Earth"); // send data to the response body
  res.end(); // signals that response has been sent. Ends the request-response cycle.
});

const port = 3000;

server.listen(port, (err) => {
    if (err) {
        console.log("Err starting the server", err.message);
        process.exit(1);
    }
    // if server starts successfully
    console.log(`Server is running at http://localhost:${port}`);
});
