import {default as flamingo} from "../flamingo"
import _ from "lodash"

const negate = flamingo.negate

describe("negate", () => {
  const func = (args) => {
    return typeof args==="string"
  }
  it("Do NOT return values that are evaluated as true by the negated function", () => {
    expect(negate(func("Hi"))).toEqual(false)
  })
  it("Do NOT return values that are evaluated as true by the negated function", () => {
    expect(negate(func(4))).toEqual(true)
  })
})
