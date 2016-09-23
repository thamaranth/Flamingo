export default o => {
  const a = []

  for( let k in o ) {
    if ( o.hasOwnProperty( k ) ) {
      a.push( k )
    }
  }

  return a
}
