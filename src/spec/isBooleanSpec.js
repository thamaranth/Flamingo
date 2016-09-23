import { default as flamingo } from '../flamingo'
import _ from 'lodash'

const isBoolean = flamingo.isBoolean

describe( 'isBoolean', () => {
  it('Checks if value is classified as a boolean primitive or object.', () => {
    expect( isBoolean(7 > 9) ).toEqual(true)
  })
})
  describe( 'isBoolean', () => {
    it('Checks if value is classified as a boolean primitive or object.', () => {
      expect( isBoolean('words') ).toEqual(false)
    })
})
