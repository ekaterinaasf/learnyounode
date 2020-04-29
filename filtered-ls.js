console.log(process.argv);
let dir = process.argv[2];
//console.log(dir);
let ext = process.argv[3];
//console.log(ext);
const fs = require("fs");
let list = [];
let reg = new RegExp("\\." + ext + "$", "gi");
console.log(reg);
//let str = "hello.js";
//let mat = str.match(reg);
//console.log(mat);

function calc(callback) {
  fs.readdir(dir, function read(err, data) {
    data
      .toString("utf8")
      .split(",")
      .filter((a) => {
        if (a.match(reg)) {
          list.push(a);
          console.log(a);
        }
      });
    callback();
  });
}

function logMyNumber() {
  list.forEach((a) => console.log(a + "\n"));
}

//run logMyNumber() as a callback for calc()
calc(logMyNumber);
