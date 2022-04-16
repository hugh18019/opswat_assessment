require("dotenv").config();
var fs = require("fs");
const { request } = require("http");
const { hashFile } = require("./hash_file");

function hashLookup(hash) {
  const url = process.env.URL + "/hash/" + hash;
  const apikey = process.env.APIKEY;

  var options = {
    method: "GET",
    url: `https://api.metadefender.com/v4/hash/${hash}`,
    headers: {
      "apikey": apikey,
    },
    host: "127.0.0.1",
    port: 5500
  };

  console.log(url);
  console.log(apikey);
  console.log(options);

  request(options, function (error, response, body) {
    if (error) throw new Error(error);

    console.log(body);
  });
}

// const file = fs.readFileSync(__dirname + "/samplefile.txt");
// const hash = hashFile(file);

// hashLookup(hash);

module.exports = {
  hashLookup: hashLookup,
};
