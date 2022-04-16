const crypto = require("crypto");

// const fs = require("fs");
// const file = fs.readFileSync(__dirname + "/samplefile.txt");

function hashFile(file) {
  const hashSum = crypto.createHash("md5");
  hashSum.update(file);
  const hex = hashSum.digest("hex");

  console.log("MD5: " + hex);

  return hex;
}

// hash(file);

exports.hashFile = hashFile;
