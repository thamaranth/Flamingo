export default (str) => {

  return str.replace(/(?:^\w|[A-Z]|\b\w)/g, function(letter, index) {
      return index == 0 ? letter.toLowerCase() : letter.toLowerCase();
    }).replace(/\s+/g, '_');

}
