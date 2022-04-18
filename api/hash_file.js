const crypto = require('crypto');

/**
 * @param  {} file
 *
 * @return {string} hex
 */
function hashFile(file) {
  const hashSum = crypto.createHash('md5');
  hashSum.update(file);
  const hex = hashSum.digest('hex');

  return hex;
}

module.exports = {
  hashFile: hashFile,
};
