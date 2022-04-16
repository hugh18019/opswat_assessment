const { hashFile } = require("./hash_file");
const { hashLookup } = require("./hash_lookup");
const upload_file = require("./upload_file");

function readInput() {
  if (process.argv.length != 4) {
    console.error(
      "Please enter an action and a filename separated by a space."
    );
    console.error("Example command: upload_file samplefile.txt");
    process.exit(1);
  }

  if (process.argv[2] == "upload_file") {
    const fileName = process.argv[3];
    console.log(fileName);
    let hash = hashFile(fileName);
    hashLookup(hash);
  }
}

readInput();
