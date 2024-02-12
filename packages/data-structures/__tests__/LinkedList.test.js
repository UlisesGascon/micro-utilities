import { LinkedList } from '../src'

describe('data-structures: LinkedList', () => {
    it('Create a linked list', () => {
      const value = "Hello World!"
      const linkedList = new LinkedList(value)
      expect(linkedList.length).toBe(1)
      expect(linkedList.head.value).toBe(value)
      expect(linkedList.head.next).toBe(null)
      expect(linkedList.tail.value).toBe(value)
      expect(linkedList.tail.next).toBe(null)
    })
})
