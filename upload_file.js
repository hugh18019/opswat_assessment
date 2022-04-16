var request = require("request");
var fs = require("fs");

const options = require("./options");
let fileStream = fs.createReadStream(__dirname + "/samplefile.txt");
let fileName = "samplefile.txt";

request(options, function (error, response, body) {
  if (error) throw new Error(error);

  console.log(body);
});
