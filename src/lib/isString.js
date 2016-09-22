"use strict"

export default (arg) => {
  // let test = true
  if (typeof arg === "string" ) {
    console.log('Its true');

    return true
  } else {
    console.log('its false');

    return false
  }
}
