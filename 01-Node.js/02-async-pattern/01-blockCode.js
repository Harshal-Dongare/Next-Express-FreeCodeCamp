const http = require("http");

const server = http.createServer((req, res) => {
    if (req.url === "/") {
        res.end("Home page");
    } else if (req.url === "/about") {
      // BLOCKING CODE !!!

        /* when user hit to '/about' handler, it will process to this block code. 
        While processing this code, other users request will stuck 
        and only get continue when this request get resolved.*/
        for (let i = 0; i < 1000; i++) {
            for (let j = 0; j < 100; j++) {
            console.log(`${i}, ${j}`);
            }
        }
        res.end("about page");
    } else res.end("Error page");
});

const port = 3000;
server.listen(port, (err) => {
    if (err) {
        console.log("Error while listening to server", err.message);
        process.exit(1);
    }
    console.log("Server is listening on port " + port + "...");
});
