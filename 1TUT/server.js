// 1) Node runs on the backend 
// 2) The console is the terminal window
// 3) The global object instead of Window 
// 4) Has common core modules 
// 5) CommonJS modules instead of ES6 modules
const os = require('os');
const path = require('path');
const { add, subtract, multiply, divide } = require('./math');
console.log("Hello World");

// console.log(global);
// console.log(os.type());
// console.log(os.version());
// console.log(os.homedir());
// console.log(path.dirname(__filename));
// console.log(path.basename(__filename));
// console.log(path.extname(__filename));
// console.log(__filename);
console.log(add(2, 3));
console.log();
console.log();