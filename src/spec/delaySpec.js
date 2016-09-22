import { default as flamingo } from '../flamingo'
import _ from 'lodash'

const delay = flamingo.delay

describe('delay', () => {
  it('runs the function after waiting a certain amount of milliseconds and then pass in the arguments given', (done) => {
    let blah

    delay( function( text ) { blah = text }, 5, 'later' )

    setTimeout(() => {
      expect(blah).toEqual(undefined)
    }, 1)

    setTimeout(() => {
      expect(blah).toEqual('later')
      done()
    }, 10)
  })
})
