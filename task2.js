function reverseString(string) {
  if (string.length < 1) throw new Error('No empty string allowed');
  return string
  .toLowerCase()
  .split('')
  .reverse()
  .join('');
}
module.exports = reverseString;
