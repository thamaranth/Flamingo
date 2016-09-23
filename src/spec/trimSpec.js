import { default as flamingo } from '../flamingo.js'

const trim = flamingo.trim

describe("trim", () => {
  const str = '-_-abc-_-'
  const char = '_-'

  it("Removes leading and trailing whitespace or specified characters from string.", () => {
    expect( trim(str, char) ).toEqual( 'abc' )
  })
})
