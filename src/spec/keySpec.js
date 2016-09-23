import { default as flamingo } from '../flamingo.js'

const key = flamingo.key

describe("key", () => {
  it('Creates an array of the own enumerable property names of object', () => {
    const obj = { a: 1, b: 2 }

    expect( key( obj ) ).toEqual( ['a', 'b'] )
  })

  it('Creates an array of the own enumerable property names of object', () => {
    const str = 'ab'
    
    expect( key( str ) ).toEqual( ['0', '1'] )
  })

})
