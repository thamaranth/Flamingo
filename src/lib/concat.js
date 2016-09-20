"use strict"

export default function( arr ) {
  const args = [...arguments]

  args.map( (x, i) => {
    if( i > 0 ){ arr.push( x ) }
  })

  console.log('Arrays', arr)

  return arr
}
