import { default as flamingo } from '../flamingo'
import _ from 'lodash'

const camelCase = flamingo.camelCase

describe("camelCase", () => {

  it("Converts string to camelCase", () => {
    expect(camelCase("test string")).toEqual("testString")
  })
})
