console.log(process.argv);
let sum=process.argv.slice(2).reduce((a,b)=>Number(a)+Number(b));
console.log(sum);
