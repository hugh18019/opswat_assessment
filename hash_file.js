const crypto = require("crypto");
const fs = require("fs");
// const file = fs.readFileSync(__dirname + "/samplefile.txt");

function hashFile(fileName) {
  let file = fs.readFileSync(__dirname + "/" + fileName);

  const hashSum = crypto.createHash("md5");
  hashSum.update(file);
  const hex = hashSum.digest("hex");

  console.log("MD5: " + hex);

  return hex;
}

// hash(file);

module.exports = {
  hashFile: hashFile,
};
