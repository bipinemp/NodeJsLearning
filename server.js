// console.log("hello world");

const os = require("os");
const path = require("path");

console.log(os.type()); //Windows_NT
console.log(os.version()); //Windows 10 Home
console.log(os.homedir()); // C:\Users\bhandari

console.log(__dirname); //D:\NodeJsLearning
console.log(__filename); //D:\NodeJsLearning\server.js

console.log(path.dirname(__filename)); // D:\NodeJsLearning
console.log(path.basename(__filename)); //server.js
console.log(path.extname(__filename)); //.js
