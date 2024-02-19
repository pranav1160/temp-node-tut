//npm - global command,commes with node
// npm --version

//local dependency - use only in this particular project
//npm i <packageName>

//global dependency - use it in any project
//npm install -g <packageName>
//sudo npm install -g <packageName> (mac)

//package.json - manifest file (stores important info about product/package)
//manual approach (create package.json int he root,create properties etc)
//npm init (step by step pls enter skip)
//npm init -y (everything by default)

const _ = require('lodash'); 
const items = [1,2,[3,4,[5]]];
const newItems = _.flattenDeep(items);
console.log(newItems);