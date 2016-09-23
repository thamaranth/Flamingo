"use strict"

export default (arg) => {
  if (typeof arg==="number" && arg>=0 && Number.isInteger(arg)) {
    return true
  }
}
