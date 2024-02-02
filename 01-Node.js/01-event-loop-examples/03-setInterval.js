// setInterval
// setInterval repeatedly executes a specified function at a given time interval
    
setInterval(() => {
    console.log(Date.now());
}, 1000);

console.log("It will print first");

// Process stays alive until user presses ctrl + C to kill the process