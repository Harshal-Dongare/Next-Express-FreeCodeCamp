// event loop
const fs = require("fs");

console.log("started first task");

fs.readFile("./content/file.txt", "utf-8", (err, result) => {
    if (err) {
        console.log("Unable to read file");
        return;
    }
    console.log(result);
    console.log("Completed first task");
});

console.log("Starting next task");
