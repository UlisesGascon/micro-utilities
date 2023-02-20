import { softAssign } from '../src'

describe('soft-assign-deep-property', () => {
  let data = null;
  const newPropertyKeys = ['you', 'will', 'say']
  const existingPropertyKeys = ['I', 'will', 'say']

  beforeEach(() => {
    data = {
      name: 'John',
      I: {
        will: {
          say: 'Hello World!' 
        } 
      }
    }
  })

  it('First argument must be an object', () => {
      expect(() => softAssign(undefined, newPropertyKeys)).toThrow('obj must be an object')
      expect(() => softAssign(null,  newPropertyKeys)).toThrow('obj must be an object')
      expect(() => softAssign("1,2,3",  newPropertyKeys)).toThrow('obj must be an object')
      expect(() => softAssign(["1,2,3"],  newPropertyKeys)).toThrow('obj must be an object')
  })

  it('Second argument must be an Array with at least one item', () => {
    expect(() => softAssign(data, undefined)).toThrow('keys must be an Array with at least one element')
    expect(() => softAssign(data, null)).toThrow('keys must be an Array with at least one element')
    expect(() => softAssign(data, "1,2,3")).toThrow('keys must be an Array with at least one element')
    expect(() => softAssign(data, 1)).toThrow('keys must be an Array with at least one element')
  })

  it('Should create a new property', () => {
    softAssign(data, ['nickName'], "cool_person")
    
    expect(data.name).toEqual('John')
    expect(data.I.will.say).toEqual('Hello World!')
    expect(data.nickName).toEqual('cool_person')
  })

  it('Should create a new deep property', () => {
    softAssign(data, newPropertyKeys, "Very Cool!")
    
    expect(data.name).toEqual('John')
    expect(data.I.will.say).toEqual('Hello World!')
    expect(data.you.will.say).toEqual('Very Cool!')
  })


  it('Should not overwrite an existing property', () => {
    softAssign(data, ['name'], "Changed!")
    
    expect(data.name).toEqual('John')
    expect(data.I.will.say).toEqual('Hello World!')
  })

  it('Should not overwrite an existing deep property', () => {
    softAssign(data, existingPropertyKeys, "Changed!")
    
    expect(data.name).toEqual('John')
    expect(data.I.will.say).toEqual('Hello World!')
  })


})
