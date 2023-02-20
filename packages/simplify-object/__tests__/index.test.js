import { simplifyObject } from '../src'

describe('simplify-object', () => {
  const baseObject = {
    name: "Jane",
    nickname: "JaneDoe",
    isAdmin: true,
    age: 120,
    bio: "Hacker life"
  }

  const excludeOperation = {
    exclude: ['name', 'bio', 'age']
  }

  const includeOperation = {
    include: ['name', 'bio', 'age']
  }

  it('First argument must be an object', () => {
      expect(() => simplifyObject(undefined, excludeOperation)).toThrow('baseObj must be an object')
      expect(() => simplifyObject(null,  excludeOperation)).toThrow('baseObj must be an object')
      expect(() => simplifyObject("1,2,3",  excludeOperation)).toThrow('baseObj must be an object')
      expect(() => simplifyObject(["1,2,3"],  excludeOperation)).toThrow('baseObj must be an object')
  })

  it('Second argument must be an object', () => {
    expect(() => simplifyObject(baseObject, undefined)).toThrow('operation must be an object')
    expect(() => simplifyObject(baseObject, null)).toThrow('operation must be an object')
    expect(() => simplifyObject(baseObject, "1,2,3")).toThrow('operation must be an object')
    expect(() => simplifyObject(baseObject, 1)).toThrow('operation must be an object')
  })

  it('Second argument. Edge case: exclusive and inclusive at the same time', () => {
    expect(() => simplifyObject(baseObject,{...excludeOperation, ...includeOperation})).toThrow('operation must have either include or exclude')
  })

  it('Second argument. Edge case: exclusive and inclusive and also include elements', () => {
    expect(() => simplifyObject(baseObject, {})).toThrow('operation must have either include or exclude')
    expect(() => simplifyObject(baseObject, {'irrelevant': []})).toThrow('operation must have either include or exclude')
    expect(() => simplifyObject(baseObject, {'exclude': []})).toThrow('operation.exclude must be an array with properties')
    expect(() => simplifyObject(baseObject, {'include': []})).toThrow('operation.include must be an array with properties')

  })

  it('should ignore references to non-existing properties', () => {
    expect(simplifyObject(baseObject, {include: ['invented']})).toEqual({})
    expect(simplifyObject(baseObject, {exclude: ['invented']})).toEqual(baseObject)
  })

  it('should return an object with exclusive approach', () => {
    const {nickname, isAdmin} = baseObject
    expect(simplifyObject(baseObject, excludeOperation)).toEqual({ nickname, isAdmin })
  })

  it('should return an object with inclusive approach', () => {
    const {name, bio, age} = baseObject
    expect(simplifyObject(baseObject, includeOperation)).toEqual({ name, bio, age })
  })

})
