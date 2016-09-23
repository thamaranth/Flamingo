import {default as flamingo} from "../flamingo"
import _ from "lodash"

const flip  = flamingo.flip

describe("flip", () => {
  it("Creates a function that invokes func with arguments reversed", () => {
    expect( flip([1, 2, 3, 4]) ).toEqual([4, 3, 2, 1])
  })
})
