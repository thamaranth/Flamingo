"use strict"

export default (arr) => {
  const arr1 = []

  arr.map( (x, i) => {
    if (i > 0) {
      arr1.push(x)
    }
  })

  console.log(arr1);

  return arr1
}
