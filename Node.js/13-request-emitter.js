// Event driven programming

// import events module and assign EventEmitter class to the variable eventEmitter
const eventEmitter = require("events");

// create an instance of eventEmitter class
const customEvent = new eventEmitter();

// on event
customEvent.on("response", (name, id) => {
    console.log(`Data received: ${name}, ${id}`);
});

customEvent.on("response", () => {
    console.log(`Some other logic here...`);
});

// emit event
// emit event can also pass parameters to listener
customEvent.emit("response", 'Harsh', 26);  
