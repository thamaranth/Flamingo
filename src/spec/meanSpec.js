import flamingo from "../flamingo"
import _ from "lodash"

const mean = flamingo.mean

describe("mean", () => {
  it("Return the mathematical average of a sum of numbers", () => {
    expect(mean([15,30,37,38,45,47])).toEqual(_.mean([15,30,37,38,45,47]))
  })
})
