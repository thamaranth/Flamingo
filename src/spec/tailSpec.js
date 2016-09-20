import { default as flamingo } from '../flamingo'
import _ from 'lodash'

const tail = flamingo.tail

describe('tail', () => {
  it('Gets all but the first element of an array', () => {
    const a = [ 1,2,3 ]

    expect(tail(a)).toEqual([2,3])
  })

  it('Gets all but the first element of an array', () => {
    const a = [ 1,2,3 ]

    expect(_.tail(a)).toEqual([2,3])
  })
})
