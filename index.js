const app=require('./app')
let arr=[4,1,6,3,4,89,0];
console.log(app.xyz())
console.log(app.x)
const result =arr.filter((item)=>{
    console.log(item);
    return item>=4
    
});
console.warn(result);