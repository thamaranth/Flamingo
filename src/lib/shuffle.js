export default (arr) => {

  let counter = arr.length
  while( counter > 0 ) {
    let index = Math.floor( Math.random() * counter )
    counter--
    let temp = arr[counter]
    arr[counter] = arr[index]
    arr[index] = temp
  }

  console.log ("shuffle mang", arr)
  return arr
}
