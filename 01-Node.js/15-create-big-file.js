// big file
const fs = require("fs");

for (let i = 0; i < 1000; i++) {
    fs.writeFileSync("./content/bigFile.txt",
    `Hello world ${i}\n`,
    {
        flag: "a",
    });
}
