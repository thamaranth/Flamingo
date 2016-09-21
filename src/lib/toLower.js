export default (str) => {
  const newArr = []
  let arr = str.split('')

  arr.map( x => {
    let lower = String.fromCharCode( x.charCodeAt() + 32 )
    newArr.push( lower )
  })
    console.log (newArr.join(''))
  return newArr.join('')


}
