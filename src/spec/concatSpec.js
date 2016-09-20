import { default as flamingo } from '../flamingo'
import _ from 'lodash'

const concat = flamingo.concat

describe('concat', () => {
  it('Creates a new array concatenating array with any additional arrays and/or values', () => {
    const arr = [ 1 ]
    const e1 = 2
    const e2 = 3

    expect( concat( arr, e1, e2 ) ).toEqual( [ 1, 2, 3 ] )
  })

  it('Compare to Lodash', () => {
    const arr = [ 1 ]
    const e1 = 2
    const e2 = 3

    expect( _.concat( arr, e1, e2 ) ).toEqual( [ 1, 2, 3 ] )
  })
})
