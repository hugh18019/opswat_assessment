const fetch = require('cross-fetch');
var fs = require('fs');
const { getScanOptions } = require('../helpers/scan_options');

/**
 * @param  {} file
 * @param  {string} fileName
 *
 * Makes request to API endpoint to scan a file
 * @return {int} data_id || {} Error
 */
async function scanFile(file, fileName) {
  let url = process.env.URL + '/file';
  const options = await awaitGetScanOptions(fileName, file);

  try {
    const res = await fetch(url, options);

    if (res.status >= 400) {
      throw new Error('Bad response from server');
    }

    const body = await res.json();
    return body.data_id;
  } catch (err) {
    console.error(err);
  }
}

/**
 * @param  {string} fileName
 * @parem  {} file
 *
 * @return {Promise} a promise that onResolve returns the options passed to the API call for scanning a file
 */
function awaitGetScanOptions(fileName, file) {
  return new Promise((resolve, reject) => {
    resolve(getScanOptions(fileName, file));
  });
}

module.exports = {
  scanFile: scanFile,
};
