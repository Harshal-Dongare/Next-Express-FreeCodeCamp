// different way of exporting modules

// You can directly export the module
module.exports.items = ['item1', 'item2']

module.exports.age = 28;

const bob = {
    name: 'Kartik'
}

// singlePerson is going to be a key and bob is the value associated with that key. 
// The exported module will look like this:
//  {
//      singlePerson: bob
//  }  
module.exports.singlePerson = bob