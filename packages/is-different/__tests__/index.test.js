import { isDifferent } from '../src'

describe('is-different', () => {
    it('Should manage DataTypes', () => {
      // Strings
      expect(isDifferent('TRUE', 'FALSE')).toBe(true)
      expect(isDifferent('TRUE', 'TRUE')).toBe(false)
      // Numbers
      expect(isDifferent(1, 2)).toBe(true)
      expect(isDifferent(2, 2)).toBe(false)
      // Exponential notation
      expect(isDifferent(123e5, 123e5)).toBe(false)
      expect(isDifferent(123e5, 123e-5)).toBe(true)

      // Booleans
      expect(isDifferent(true, false)).toBe(true)
      expect(isDifferent(true, true)).toBe(false)

      // Null
      expect(isDifferent(null, null)).toBe(false)
      expect(isDifferent(null, "something")).toBe(true)

      // Undefined is not a valid JSON value: https://www.json.org/json-en.html
      expect(isDifferent({a: undefined}, {a: "1"})).toBe(true)
      expect(isDifferent({a: undefined}, {a: null})).toBe(true)

      // Symbols
      expect(isDifferent(Symbol("one"),Symbol("one"))).toBe(false)
      expect(isDifferent(Symbol("one"),Symbol("two"))).toBe(false)
      //@see: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Symbol
      expect(Symbol("foo") === Symbol("foo")).toBe(false)

      expect(isDifferent(Symbol.for("one"), "one")).toBe(true)
      expect(isDifferent(Symbol.for("one"), "two")).toBe(true)
    })

    it('Should manage Object Datatypes', () => {
      // Objects
      expect(isDifferent({ a: 1 }, { a: 1 })).toBe(false)
      expect(isDifferent({ a: 1 }, { a: 2 })).toBe(true)
      expect(isDifferent({ a: 1 }, { a: 1, b: 1 })).toBe(true)
      // Arrays
      expect(isDifferent([1, "test", 2], [1, 2])).toBe(true)
      expect(isDifferent([1, "test"], [1, "test"])).toBe(false)
      // Dates
      expect(isDifferent(new Date("2022-03-25"), new Date("2022-03-25"))).toBe(false)
      expect(isDifferent(new Date("2021-01-04"), new Date("2022-03-25"))).toBe(true)
    })

    it('Known Limitations', () => {
      expect(isDifferent({a: ()=>{return true}},{a: ()=>{return false}})).toBe(false)
      expect(isDifferent(() => {return true},()=>{return true})).toBe(false)
      // BigInt is not a valid JSON value
      expect(() => isDifferent(1234567890123456789012345678901234567890n, 1234567890123456789012345678901234567890n)).toThrow('Do not know how to serialize a BigInt')
    })


})
