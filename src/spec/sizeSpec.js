import { default as flamingo } from '../flamingo'
import _ from 'lodash'

const size = flamingo.size

describe( "size", () => {
  it('Gets the size of the collection by returning its length.', () => {
    expect( size([ 1, 2, 3] ) ).toEqual( 3 )
  })
})
  describe( "size", () => {
    it('Gets the size of the collection by returning its length.', () => {
      expect( size( 'pebbles') ).toEqual( 7 )
    })
})
