//Importing Module
//To import a module which is the local file, use the require() function with the relative path of the module (file name).

const add = require('./export')
const sub = require('./export')
const multi = require('./export')
const divid = require('./export')

console.log(add('add-',3, 4))
console.log(sub('sub-',4, 5))
console.log(multi('multi-', 5, 7))
console.log(divid('divid-', 2, 4))