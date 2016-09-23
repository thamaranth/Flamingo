import { default as flamingo } from '../flamingo.js'

const trimStart = flamingo.trimStart

describe("trimStart", () => {
  const str = '-_-abc-_-'
  const char = '_-'

  it("Removes leading and trailing whitespace or specified characters from string.", () => {
    expect( trimStart( str, char ) ).toEqual( 'abc-_-' )
  })
})
