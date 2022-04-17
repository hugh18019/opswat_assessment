require("dotenv").config();
const fetch = require("cross-fetch");

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

    console.log("lookup_res", res);

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
  hashLookup: hashLookup,
};
