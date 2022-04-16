var fs = require("fs");
const { request } = require("http");
const { hashFile } = require("./hash_file");

function hashLookup(hash) {
  var options = {
    method: "GET",
    url: process.env.URL + "/hash/{hash}",
    headers: {
      apikey: process.env.APIKEY,
    },
  };

  request(options, function (error, response, body) {
    if (error) throw new Error(error);

    console.log(body);
  });
}

// const file = fs.readFileSync(__dirname + "/samplefile.txt");
// const hash = hashFile(file);

// hashLookup(hash);

exports.hashLookup = hashLookup;
