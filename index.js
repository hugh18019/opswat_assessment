const fs = require('fs');
const { preCheck } = require('./helpers/preliminary_check');
const { hashFile } = require('./api/hash_file');
const { hashLookup } = require('./api/hash_lookup');
const { scanFile } = require('./api/scan_file');
const { fetchResult } = require('./api/fetch_result');
const { output } = require('./helpers/output');

async function main() {
  preCheck();

  const fileName = process.argv[3];
  let file = fs.readFileSync(__dirname + '/' + fileName);

  const hash = await awaitHashFile(file);
  const lookup_result = await awaitHashLookup(hash);

  if (lookup_result) output(fileName, lookup_result);
  else {
    const data_id = await awaitScanFile(file, fileName);
    const result = await awaitFetchResult(data_id);
    output(fileName, result);
  }
}

/**
 * @param  {string} fileName
 *
 * @return {Promise} a promise that onResolve returns the hash of the input file
 */
function awaitHashFile(fileName) {
  return new Promise((resolve, reject) => {
    resolve(hashFile(fileName));
  });
}

/**
 * @param  {string} hash
 *
 * @return {Promise} a promise that onResolve returns the result of a hash lookup
 */
function awaitHashLookup(hash) {
  return new Promise((resolve, reject) => {
    resolve(hashLookup(hash));
  });
}

/**
 * @param  {string} fileName
 *
 * @return {Promise} a promise that onResolve returns the result of a scan
 */
function awaitScanFile(fileName) {
  return new Promise((resolve, reject) => {
    resolve(scanFile(fileName));
  });
}

/**
 * @param  {int} data_id
 *
 * @return {Promise} a promise that onResolve returns the id of a scanned file
 */
function awaitFetchResult(data_id) {
  return new Promise((resolve, reject) => {
    resolve(fetchResult(data_id));
  });
}

main();
