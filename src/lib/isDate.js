"use strict"

export default ( arg ) => {

  if ( arg instanceof Date ) {
    return true
  } else {
    return false
  }
}
