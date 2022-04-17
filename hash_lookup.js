require("dotenv").config();
const request = require("request");

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

    if (res.status >= 400) {
      throw new Error("Bad response from server");
    }

    const body = await res.json();

    return body;
  } catch (err) {
    console.error(err);
  }
}

// async function hashLookup(hash) {
//   const url = process.env.URL + "/hash/" + hash;
//   const apikey = process.env.APIKEY;

//   const url_test = `http://api.metadefender.com/v4/hash/${hash}`;

//   var options = {
//     method: "GET",
//     url: `http://api.metadefender.com/v4/hash/${hash}`,
//     headers: {
//       apikey: apikey,
//     },
//     json: true,
//   };

//   let res;

//   request(options, function (error, response, body) {
//     if (error) throw new Error(error);

//     // console.log(body.scan_results.scan_details.AegisLab);

//     res = body;
//   });

//   console.log(res);
//   return res;
// }

module.exports = {
  hashLookup: hashLookup,
};
