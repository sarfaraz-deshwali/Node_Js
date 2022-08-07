const fs = require("fs");
let text = fs.readFileSync("hello.txt","utf-8");
text = text.replace("brother","sister");
console.log(text);
