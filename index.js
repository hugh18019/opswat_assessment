const { hashFile } = require("./hash_file");
const { hashLookup } = require("./hash_lookup");
const { scanFile } = require("./scanFile");
const { fetchResult } = require("./fetch_result");
const { output } = require("./output");

async function main() {
  if (process.argv.length != 4) {
    console.error(
      "Please enter an action and a filename separated by a space."
    );
    console.error("Example command: upload_file samplefile.txt");
    process.exit(1);
  }

  if (process.argv[2] != "upload_file") {
    console.error("Invalid action");
    console.error("Example action: upload_file");
    process.exit(1);
  }

  const fileName = process.argv[3];
  const hash = await awaitHashFile(fileName);
  const lookup_result = await awaitHashLookup(hash);

  if (lookup_result) output(fileName, lookup_result);
  else {
    console.log(`No cached scan results for ${fileName}`);
    const { data_id } = await awaitScanFile(fileName);
    const result = await awaitFetchResult(data_id);

    output(fileName, result);
  }
}

function awaitHashFile(fileName) {
  return new Promise((resolve, reject) => {
    resolve(hashFile(fileName));
  });
}

function awaitHashLookup(hash) {
  return new Promise((resolve, reject) => {
    resolve(hashLookup(hash));
  });
}

function awaitScanFile(fileName) {
  return new Promise((resolve, reject) => {
    resolve(scanFile(fileName));
  });
}

function awaitFetchResult(data_id) {
  return new Promise((resolve, reject) => {
    resolve(fetchResult(data_id));
  });
}

main();
