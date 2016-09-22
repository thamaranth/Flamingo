"use strict"

export default (arg) => {
  // the easy way
  // return typeof arg === "string"
  
  if (typeof arg === "string" ) {
    console.log('Its true');

    return true
  } else {
    console.log('its false');

    return false
  }
}
