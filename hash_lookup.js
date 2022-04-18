require('dotenv').config();
const fetch = require('cross-fetch');

/**
 * @param  {string} hash
 *
 * Makes request to API endpoint to retrieve cached scan results using
 * the hash of the input file
 * @return {int} data || {} Error
 */
async function hashLookup(hash) {
  const url = `${process.env.URL}/hash/${hash}`;
  const apikey = process.env.APIKEY;

  var options = {
    headers: {
      apikey: apikey,
    },
    json: true,
  };

  try {
    const res = await fetch(url, options);

    if (res.status >= 400) {
      console.log('No cached result was found for the file.');
      return null;
    }

    const data = await res.json();
    return data;
  } catch (err) {
    console.error(err);
  }
}

module.exports = {
  hashLookup: hashLookup,
};
