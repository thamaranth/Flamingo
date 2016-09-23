import {default as flamingo} from "../flamingo"
import _ from "lodash"

const compact  = flamingo.compact

describe("compact", () => {
  it("Creates an array with all falsey values removed. The values false, null, 0, \"\", undefined, and NaN are falsey", () => {
    expect( compact([0, 1, false, 2, "", 3]) ).toEqual([1, 2, 3])
  })
})
