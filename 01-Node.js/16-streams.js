// stream
const fs = require("fs");

const readStream = fs.createReadStream("./content/bigFile.txt", {
    encoding: "utf-8",
});

// The size of the file is big, so that much big data impossible to store in variable stream. so createReadStream print data in chunks.
readStream.on("data", (result) => {
    console.log(result);
});

readStream.on("error", (err) => {
    console.log(err);
});
