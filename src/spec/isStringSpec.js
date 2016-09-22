import {default as flamingo} from "../flamingo"
import _ from "lodash"

const isString = flamingo.isString

describe("isString", () => {
  it('will take an argument and check if it is a string or not', () => {
    expect(isString("HI")).toEqual(true)
  })

  it('will take an argument and check if it is a string or not', () => {
    expect(isString(4)).toEqual(false)
  })
})
