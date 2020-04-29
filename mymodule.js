module.exports = function (dir, ext, callback) {
  const fs = require("fs");
  let reg = new RegExp("\\." + ext + "$", "gi");
  //console.log(reg);
  let list = [];

  fs.readdir(dir, function read(err, data) {
    if (err) {
      return callback(err);
    } // early return
    data
      .toString("utf8")
      .split(",")
      .filter((a) => {
        if (a.match(reg)) {
          list.push(a);
          console.log(a);
        }
      });
    callback(null, list);
  });

  return;
};
