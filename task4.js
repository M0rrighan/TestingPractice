function capitalize(string) {
  if (string.length < 1) throw new Error('No empty string allowed');

  return string[0].toUpperCase() + string.slice(1).toLowerCase();
}

module.exports = capitalize;
