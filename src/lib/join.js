export default (arr, sep) => {
  let newArr = []
  for (let i = 0; i < arr.length; ++i) {
    newArr.push(arr[i])
    if (i < (arr.length - 1)) {
      newArr.push(sep)
    }
  }

  let joinC = newArr + ''

  const trim = (str) => {
    let char = ','

    let output = ''
    for( let i in str ){
      let check = 0

      for( let j in char ){
        if (str[ i ] !== char[ j ]) {

          check++
          if( check === char.length ) {

            output += str[i]
          }
        }
      }
    }

    return output
  }

  return trim( joinC )
}
