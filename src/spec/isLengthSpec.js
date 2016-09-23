import flamingo from "../flamingo"
import _ from "lodash"

const isLength = flamingo.isLength

describe("isLength", () => {
  let arr = [1,2,3]

  it("Checks if 'specified value' is a valid array-like length", () => {
    expect(isLength(arr.length)).toEqual(true)
  })
})
