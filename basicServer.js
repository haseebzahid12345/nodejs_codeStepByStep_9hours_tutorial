const http = require('http');

// !arrow function
// http.createServer((req,resp) =>
//  {
// resp.write("<h1>Code Step by step</h1>");
// resp.end();
// }).listen(4500);


 // ! function in a parameter

// function dataControl(req,resp)
// {
// resp.write("<h1>Code Step by step,,,</h1>");
// resp.end();
// }

// http.createServer(dataControl).listen(4500);


// ! arrow function in a parameter

const dataControl=(req,resp)=>
{
resp.write("<h1>Code Step by step,,,</h1>");
resp.end();
}

http.createServer(dataControl).listen(4500);


// !simple function

// function test(a)
// {
//     return a*10;
// }

// !simple arrow function

// const test =(a)=>a*100;