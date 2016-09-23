import { default as flamingo } from '../flamingo.js'

const join = flamingo.join

describe("join", () => {

  it('join the first letter of the given string', () => {
    const arr = ['a', 'b', 'c']
    const sep = " "

    expect( join( arr, sep ) ).toEqual( 'a b c' )
  })

  it('join the first letter of the given string', () => {
    const arr = ['a', 'b', 'c']
    const sep = "-"
    
    expect( join( arr, sep ) ).toEqual( 'a-b-c' )
  })
})
