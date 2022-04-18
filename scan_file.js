const fetch = require('cross-fetch');
var fs = require('fs');
const { getScanOptions } = require('./scan_options');

async function scanFile(fileName) {
  let file = fs.createReadStream(__dirname + '/' + fileName);
  let url = process.env.URL + '/file';

  const options = await awaitGetScanOptions(fileName, file);

  try {
    const res = await fetch(url, options);

    if (res.status >= 400) {
      return null;
    }

    const body = await res.json();

    return body.data_id;
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
