const fetch = require("cross-fetch");
var fs = require("fs");

async function upload_file(fileName) {
  let file = fs.createReadStream(__dirname + "/" + fileName);
  let url = process.env.URL + "/file";

  const options = {
    method: "POST",
    headers: {
      apikey: process.env.APIKEY,
      "Content-Type": "application/octet-stream",
      filename: fileName,
    },
    body: {
      file: file,
    },
    json: true,
  };

  try {
    const res = await fetch(url, options);

    if (res.status >= 400) {
      return null;
    }

    const body = await res.json();
    console.log(body);
    return body;
  } catch (err) {
    console.error(err);
  }
}

module.exports = {
  upload_file: upload_file,
};
