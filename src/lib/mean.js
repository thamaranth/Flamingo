"use strict"

export default (args) => {
  const arr = [...arguments]
  let avg = 0
  let x = 0

  arr.map((x,i) => {
     x += arr[i]
   }

   avg = x/arr.length
   return avg
 }
