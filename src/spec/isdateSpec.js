import { default as flamingo } from '../flamingo'

const isDate = flamingo.isDate

xdescribe( "isdate", ()=> {
  it('Checks if value is classified as a Date object.', () => {
    expect( isDate( 'Mon April 23 2012' ) ).toEqual( false )
  })

  it('Checks if value is classified as a Date object.', () => {
    expect( isDate( new Date ) ).toEqual( true )
  })

  it('Checks if value is classified as a Date object.', () => {
    expect( isDate( {} ) ).toEqual( false )
  })

})
