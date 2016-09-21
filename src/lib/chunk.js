export default ( arr, size ) => {
  const newArr = []

  for( let i = 0; i < arr.length;) {
    let innerArr = []

    for( let j = 0; j < size; j++) {
      if ( arr[ i ] ) {
        innerArr.push( arr[i] )
      }

      ++i
    }

    newArr.push( innerArr )
  }

  console.log('Chunk Array', newArr);
  return newArr
}
