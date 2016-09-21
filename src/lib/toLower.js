export default (str) => {
  const newArr = []
  let arr = str.split('')

  arr.map( x => {
    let number = x.charCodeAt()

    if ( (number > 64) && (number < 91) ) {
      let lower = String.fromCharCode( number + 32 )
      newArr.push( lower )
    } else {
      newArr.push( x )
    }
  })

  console.log (newArr.join(''))

  return newArr.join('')


}
