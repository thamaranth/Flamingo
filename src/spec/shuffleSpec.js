

import { default as flamingo } from '../flamingo'
import _ from 'lodash'

const shuffle = flamingo.shuffle

describe( 'shuffle', () => {
  it('shuffles an array', () => {
    expect( shuffle( ['1', '2', '3'] ) ).toEqual(jasmine.any(Array)  )
  })
})
