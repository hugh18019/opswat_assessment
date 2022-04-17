require("dotenv").config();
var fs = require("fs");
const request = require("request");
const { hashFile } = require("./hash_file");

function hashLookup(hash) {
  const url = process.env.URL + "/hash/" + hash;
  const apikey = process.env.APIKEY;

  const url_test = `http://api.metadefender.com/v4/hash/${hash}`;

  var options = {
    method: "GET",
    url: `http://api.metadefender.com/v4/hash/${hash}`,
    headers: {
      "apikey": apikey,
    },
    "json": true
  };

  request(options, function (error, response, body) {
    if (error) throw new Error(error);

    console.log(body.scan_results.scan_details.AegisLab);

    return body;
  });
}

module.exports = {
  hashLookup: hashLookup,
};
