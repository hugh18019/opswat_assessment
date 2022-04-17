const fetch = require("cross-fetch");
var fs = require("fs");
const { getScanOptions } = require("./scan_options");

async function scanFile(fileName) {
  let file = fs.createReadStream(__dirname + "/" + fileName);
  let url = process.env.URL + "/file";

  const options = await awaitGetScanOptions(fileName, file);

  // const options = {
  //   method: "POST",
  //   headers: {
  //     apikey: process.env.APIKEY,
  //     "Content-Type": "application/octet-stream",
  //     filename: fileName,
  //   },
  //   body: {
  //     file: file,
  //   },
  //   json: true,
  // };

  try {
    const res = await fetch(url, options);

    if (res.status >= 400) {
      return null;
    }

    const body = await res.json();

    return body;
  } catch (err) {
    console.error(err);
  }
}

function awaitGetScanOptions(fileName, file) {
  return new Promise((resolve, reject) => {
    resolve(getScanOptions(fileName, file));
  });
}

module.exports = {
  scanFile: scanFile,
};
