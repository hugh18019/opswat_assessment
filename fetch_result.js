require("dotenv").config();
const fetch = require("cross-fetch");

async function fetchResult(dataId) {
  const url = `${process.env.URL}/file/${dataId}`;
  const apikey = process.env.APIKEY;

  var options = {
    headers: {
      apikey: apikey,
      "x-file-metadata": 1,
    },
    json: true,
  };

  var res = await getScanResult(url, options);
  var scan_progress = res.scan_results.progress_percentage;

  while (scan_progress < 100) {
    await timeout(2000);
    res = await getScanResult(url, options);
    scan_progress = res.scan_results.progress_percentage;
    console.log("scan_progress", scan_progress);
  }

  return res;
}

async function timeout(time) {
  return await new Promise((resolve) => setTimeout(resolve, time));
}

async function getScanResult(url, options) {
  let res = new Promise((resolve, reject) => {
    resolve(fetchOnce(url, options));
  });

  return res;
}

async function fetchOnce(url, options) {
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

module.exports = {
  fetchResult: fetchResult,
};
