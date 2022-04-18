require('dotenv').config();
const fetch = require('cross-fetch');

/**
 * @param  {int} dataId
 *
 * Repeatedly calls getScanResult to pull scan results from server until scan is complete
 * @return {object} res
 */
async function fetchResult(dataId) {
  const url = `${process.env.URL}/file/${dataId}`;
  const apikey = process.env.APIKEY;

  var options = {
    headers: {
      apikey: apikey,
      'x-file-metadata': 1,
    },
    json: true,
  };

  var res = await getScanResult(url, options);
  var scan_progress = res.scan_results.progress_percentage;

  while (scan_progress < 100) {
    await timeout(2000);
    res = await getScanResult(url, options);
    scan_progress = res.scan_results.progress_percentage;
    console.log('scan_progress', scan_progress);
  }

  return res;
}

/**
 * @param  {int} time
 *
 * Delays the the execution of the calling function for a given amount of time
 */
async function timeout(time) {
  return await new Promise((resolve) => setTimeout(resolve, time));
}

/**
 * @param  {string} url
 * @param  {object} options
 *
 * Calls fetchOnce to fetch scan result only once
 * @return {Promise} a promise that onResolve returns the result of a scan
 */
async function getScanResult(url, options) {
  let res = new Promise((resolve, reject) => {
    resolve(fetchOnce(url, options));
  });

  return res;
}

/**
 * @param  {string} url
 * @param  {object} options
 *
 * Makes request to API endpoint to fetch scan result
 * @return {object} body || {} Error
 */
async function fetchOnce(url, options) {
  try {
    const res = await fetch(url, options);

    if (res.status >= 400) {
      throw new Error('Bad response from server');
    }

    const body = await res.json();

    return body;
  } catch (err) {
    console.error(err);
  }
}

module.exports = {
  fetchResult: fetchResult,
};
