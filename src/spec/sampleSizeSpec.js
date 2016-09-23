import flamingo from '../flamingo'

const sampleSize = flamingo.sampleSize

describe('sampleSize', () => {
  it('Gets n random elements at unique keys from collection up to the size of collection',() => {
      expect( sampleSize( ['1', '2', '3'], 2 ) ).toEqual(jasmine.any(Array) )
  })
})
