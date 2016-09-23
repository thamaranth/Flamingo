import flamingo from '../flamingo'

const ceil = flamingo.ceil


describe('ceil', () => {
  it('Computes number rounded up to precision.', () => {
    expect( ceil(29.58) ).toEqual(30)
  })
})
