export default (arr, sep) => {
  let result = ''
  for(let i = 0; i < arr.length; i++){
    if(arr[i + 1] == undefined){
      result = result + arr[i]
      break
    }
    result = result + arr[i] + sep
  }
  return result
}
