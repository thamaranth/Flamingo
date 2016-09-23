import shuffle from "./shuffle.js"

export default ( arr, size ) => {
  const shuffled = shuffle( arr )

  console.log(shuffled.slice( 0, size ))
  return shuffled.slice( 0, size )



  //
  // const temp = []
  // for( let i = 0; i < size; i++ ) {
  //   temp.push( arr[ i ])
  // }
  //
  // return temp
}
