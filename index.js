const { preCheck } = require('./preliminary_check');
const { hashFile } = require('./hash_file');
const { hashLookup } = require('./hash_lookup');
const { scanFile } = require('./scan_file');
const { fetchResult } = require('./fetch_result');
const { output } = require('./output');

async function main() {
  preCheck();

  const fileName = process.argv[3];
  const hash = await awaitHashFile(fileName);
  const lookup_result = await awaitHashLookup(hash);

  if (lookup_result) output(fileName, lookup_result);
  else {
    const data_id = await awaitScanFile(fileName);
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
