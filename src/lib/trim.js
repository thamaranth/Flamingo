export default ( str, char ) => {
  let output = ''

  for ( let i in str ) {
    let check = 0

    for (let j in char) {
      if ( str[ i ] !== char[ j ] ) {
        check++

        if ( check === char.length ) {
          output += str[ i ]
        }
      }
    }
  }

  return output
}
