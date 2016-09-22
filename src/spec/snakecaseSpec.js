import { default as flamingo } from '../flamingo'
import _ from 'lodash'

const snakecase = flamingo.snakecase

describe("snakecase", () => {
  //let str = "test string"
  it("Converts string to snakecase", () => {
    expect(snakecase("test string")).toEqual("test_string")
  })
})
