// Global variables

// __dirname: gives path to current directory
console.log(__dirname);

// require: A function to use modules
console.log(require);

// module: info about current module(file)
console.log(module);

setInterval(() => {
  console.log(Date.now());
}, 1000);
