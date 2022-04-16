var request = require("request");
var fs = require("fs");

function upload_file(fileName) {
  const options = {
    method: "POST",
    url: process.env.URL + "/file",
    headers: {
      apikey: process.env.APIKEY,
      "Content-Type": "application/octet-stream",
      filename: fileName,
    },
  };

  // let fileStream = fs.createReadStream(__dirname + fileName);
  // let fileName = "samplefile.txt";

  request(options, function (error, response, body) {
    if (error) throw new Error(error);

    console.log(body);
  });
}

module.exports = {
  upload_file: upload_file,
};
