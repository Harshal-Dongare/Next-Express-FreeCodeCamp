// import a module
const names = require("./04-names");
const hi = require("./05-utils");
const data = require("./06-alternative-module-methos");

// importing file without exporting, cause to execute all the functions present inside that file `07-mind-grenade.js`
require("./07-mind-grenade");

console.log(data);

hi(data.singlePerson.name);

// `names` is imported module which is an object has two properties, harsh and ram
hi(names.harsh);
hi(names.ram);

hi("Prajakta");
