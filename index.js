const { hashFile } = require("./hash_file");
const { hashLookup } = require("./hash_lookup");
const upload_file = require("./upload_file");
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

  let hash = hashFile(fileName);

  let promise = new Promise((resolve, reject) => {
    resolve(hashLookup(hash));
  });

  let lookup_res = await promise;

  output(fileName, lookup_res);
}

main();
