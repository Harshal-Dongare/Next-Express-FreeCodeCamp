// Path module

// import path module
const path = require("path");

// return the system-specific path separator
console.log(path.sep);

// join together multiple paths using separator
const filePath = path.join("./content", "subfolder", "text.txt");
console.log(filePath);

// returns the last portion of the file path
const basename = path.basename(filePath);
console.log(basename);

// returns the absolute path by combining the provided path segments.
const absolute = path.resolve(__dirname, "content", "subfolder", "text.txt");
console.log(absolute);
