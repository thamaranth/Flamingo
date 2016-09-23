"use strict"

export default (objName, arrSel) => {
  const newObject = {}

  for(let i of arrSel) {
    for(let x in objName) {
      if(x === i) {
        let match = i
        newObject[match] = objName[x]
      }
    }
  }
  return newObject
}
