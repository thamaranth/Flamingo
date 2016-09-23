import { default as flamingo } from '../flamingo.js'

const last = flamingo.last

describe("last", () => {
  it("Returns the last element of an array.", () => {
    const arr = [1, 2, 3]

    expect( last( arr ) ).toEqual( 3 )
  })
})
