import { default as flamingo } from '../flamingo'
import _ from 'lodash'

const chunk = flamingo.chunk

 describe( 'chunk', () => {
  it('Creates an array of elements split into groups the length of given size.', () => {
    expect( chunk( ['a', 'b', 'c', 'd'], 2 ) ).toEqual( [['a', 'b'], ['c', 'd']] )
  })

  it('Creates an array of elements split into groups the length of given size.', () => {
    expect( chunk( ['a', 'b', 'c', 'd'], 3 ) ).toEqual( [['a', 'b', 'c',], ['d']] )
  })

  it('Creates an array of elements split into groups the length of given size.', () => {
    expect( chunk( ['a', 'b', 'c', 'd'], 1 ) ).toEqual( [['a'], ['b'], ['c'], ['d']] )
  })
})
