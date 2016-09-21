"use strict"

export default (str) => {
  const convertedstr = str.split("")

  if (convertedstr[0].charCodeAt()>96 && convertedstr[0].charCodeAt()<122) {
    convertedstr[0] = String.fromCharCode(convertedstr[0].charCodeAt()-32)

    str = convertedstr.join("")
  }
  return str
}
