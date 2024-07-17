const fs =  require('fs');
console.log("code step by step");
console.log("-->>",__dirname)
console.log("-->",__filename)

fs.writeFileSync("hello.txt","code step by step ");


const abc = require('fs').writeFileSync;
abc("abc.txt","abc");
