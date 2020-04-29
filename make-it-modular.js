//import {} form './mymodule.js';
const mymodule = require("./mymodule.js");

//console.log(process.argv);
let dir = process.argv[2];
let ext = process.argv[3];

//callback function
function printer(err, data) {
  if (err === null) {
    data.forEach((a) => console.log(a + "\n"));
  } else {
    console.log("Error: " + err);
  }
}

mymodule(dir, ext, printer);
