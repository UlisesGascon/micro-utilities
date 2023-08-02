import { stringToArray } from '../src'

describe('string-to-array', () => {
    it('Should convert an array to string', () => {
      expect(stringToArray("hello,world ")).toStrictEqual(['hello', 'world'])
    })

    it('Should support custom separators', () => {
      expect(stringToArray("hello+world", "+")).toStrictEqual(['hello', 'world'])
    })

    it('Should remove empty values', () => {
      expect(stringToArray("John, Lisa,  , , James")).toStrictEqual(['John', 'Lisa', 'James'])
    })

    it('Should ignore blank spaces', () => {
      expect(stringToArray("   John, Lisa ,  James  ")).toStrictEqual(['John', 'Lisa', 'James'])
    })

    it('Should always return an array', () => {
      expect(stringToArray("")).toStrictEqual([])
    })
})
