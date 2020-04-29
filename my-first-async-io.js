console.log(process.argv);
let path = process.argv[2];
const fs = require("fs");
let myNumber = 0;

function calc(callback) {
  fs.readFile(path, function read(err, data) {
    myNumber = data.toString("utf8").split("\n").length - 1;
    callback();
  });
}

function logMyNumber() {
  console.log(myNumber);
}

//run logMyNumber() as a callback for calc()
calc(logMyNumber);
