// OS modules
const os = require("os");

// info about current user
const user = os.userInfo();
console.log(user);

// return system uptime in seconds
const uptime = os.uptime();
console.log(`System uptime: ${uptime} seconds`);

// create os object and include all information using os modules
const currentOS = {
    systemName: os.type(), // system name
    release: os.release(),  // release version
    totalMem: os.totalmem(), // total memory
    freeMem: os.freemem(), // free memory
};

console.log(currentOS);
