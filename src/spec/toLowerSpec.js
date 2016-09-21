import { default as flamingo } from '../flamingo'
import _ from 'lodash'

const toLower = flamingo.toLower

  describe ( 'toLower', () => {
    it('Converts string, as space separated words, to lower case.', () => {
      expect( toLower('truth') ).toEqual('truth')
    })
  })
