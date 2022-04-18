function preCheck() {
  if (process.argv.length != 4) {
    console.error(
      'Please enter an action and a filename separated by a space.'
    );
    console.error('Example command: upload_file samplefile.txt');
    process.exit(1);
  }

  if (process.argv[2] != 'upload_file') {
    console.error('Invalid action');
    console.error('Example action: upload_file');
    process.exit(1);
  }
}

module.exports = {
  preCheck: preCheck,
};
