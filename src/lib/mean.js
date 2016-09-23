"use strict"

export default (args) => {
  const arr = [...args]
  let total = 0
  let avg = 0

  arr.map((x,i) => {
     total += arr[i]
   })

  // //ES6 for loop (alternate option vs. map)
  // for(let num of arr){
  //   total += num
  // }

  avg = total / arr.length
  console.log("mean.js Test - Average of",arr,"is",avg)
  return avg
 }
