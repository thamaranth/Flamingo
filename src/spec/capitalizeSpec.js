import { default as flamingo } from '../flamingo'
import _ from 'lodash'

const capitalize = flamingo.capitalize

describe("capitalize", () => {
  let str = "string"

  fit("Capitalize the first letter of a string to uppercase and all else to lowercase", () => {
    expect(capitalize(str)).toEqual("String")
  })

  it("Lodash Test", () => {
    expect(_.capitalize(str)).toEqual("String")
  })
})
