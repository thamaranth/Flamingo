import flamingo from "../flamingo"
import _ from "lodash"

const pick = flamingo.pick

const contact = {
  'firstName': "Learners",
  'lastName': "Guild",
  'address': "492 9th St.",
  'city': "Oakland",
  'state': "CA",
  'zip': "94607"
}

describe("pick", () => {
  it("Returns a new object with the picked ('selected') properties from an existing object", () => {
    expect(pick(contact, ['firstName', 'lastName'])).toEqual({'firstName': "Learners", 'lastName':"Guild"})
  })
})
