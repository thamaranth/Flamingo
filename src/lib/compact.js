"use strict"

export default (array) => {
  // const newArray = []
  //
  // array.forEach((x,i) => {
  //   if( !(x === "" || x === false || x === null || x === 0 || x === undefined || x === NaN)) {
  //     newArray.push(array[i])
  //   }
  // })
  //
  // console.log(newArray);
  //
  // return newArray
  //
  return array.filter( (value, index) => {
    return !(value === "" || value === false || value === null || value === 0 || value === undefined || value === NaN)
  })
}
