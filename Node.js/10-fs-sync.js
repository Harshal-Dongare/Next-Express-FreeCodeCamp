// fs module

// import methods using destructuring
// const {readFileSync, writeFileSync} = require('fs');

const fs = require("fs");

// read operations
const first = fs.readFileSync("./content/file.txt", "utf8");
const second = fs.readFileSync("./content/second.txt", "utf8");

// write operation
fs.writeFileSync(
  "./content/result-sync.txt", // file path

  `\nHere is the result: ${first}, ${second}`, // data to add

  {
    flag: "a", // allows appending without overwriting previous content
  }
);

console.log(first, second);
