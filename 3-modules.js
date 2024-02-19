//common js - every file is a module by default (by default)
//modules - encapsulated code (only share minimum)


const names = require('./4-names')
// console.log(names);

const myFn = require('./5-utils')

const data = require('./6-altFlavour')

// console.log(data);

require('./7-mind-grenade')

// myFn(names.john); 
// myFn(names.peter);
// myFn('bankai');
