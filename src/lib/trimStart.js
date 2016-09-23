// const str = '-_-abc-_-'
// const char = '_-'
//
// it("Removes leading and trailing whitespace or specified characters from string.", () => {
//   expect( trimStart( str, char ) ).toEqual( 'abc-_-' )
// })

export default (str, char) => {
  let output = ''

  for(let i in str){
    let check = 0

    for(let j in char){

      if (str[i] !== char[j]) {
        check++

        if (check === 2) {

          while (str.length > i) {
            output += str[i]
            i++
          }

          return output
        }
      }
    }
  }
  
  return output
}
