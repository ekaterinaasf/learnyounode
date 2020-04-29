//read the input
console.log(process.argv);
let path=process.argv[2];
const fs=require('fs');
let buf=fs.readFileSync(path);
console.log(buf.toString().split('\n').length-1);
