// fs - async module

const fs = require("fs");

// takes callback which has two arguments, err and result
fs.readFile("./content/file.txt", "utf-8", (err, result) => {
    if (err) {
        console.log(err.message);
        return;
    }
    const firstFile = result;

    fs.readFile("./content/second.txt", "utf-8", (err, result) => {
        if (err) {
        console.log(err.message);
        return;
        }
        const secondFile = result;

        fs.writeFile(
        "./content/result-async.txt", // file path
        `The result is: ${firstFile}, ${secondFile}`, // data to append
        {
            flag: "a", // do not overwrite previous data
        },
        (err, result) => {
            if (err) {
            console.log(err.message);
            return;
            }
            console.log(result);
        }
        );
    });
});
