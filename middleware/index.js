const fs = require("fs");

function logReqRes(fileName) {
  return (req, res, next) => {
    fs.appendFile(
      fileName,
      ` Date is ${Date.now()} : ${req.ip} - ${req.method} - ${req.path}\n`,
      (err) => {
        next();
      }
    );
  };
}

module.exports = { logReqRes };
