import { LinkedList } from '../src'

describe('data-structures: LinkedList', () => {
    const value = "Item 1"

    it('Create a linked list', () => {
      const linkedList = new LinkedList(value)
      expect(linkedList.length).toBe(1)
      expect(linkedList.head.value).toBe(value)
      expect(linkedList.head.next).toBe(null)
      expect(linkedList.tail.value).toBe(value)
      expect(linkedList.tail.next).toBe(null)
    })

    it('Push items', () => {
      const linkedList = new LinkedList(value)
        .push("Item 2")
        .push("Item 3")
      expect(linkedList.length).toBe(3)
      expect(linkedList.head.value).toBe(value)
      expect(linkedList.head.next.value).toBe("Item 2")
      expect(linkedList.tail.value).toBe("Item 3")
      expect(linkedList.tail.next).toBe(null)
    })

    it('Pop items', () => {
      const linkedList = new LinkedList(value)
        .push("Item 2")
      expect(linkedList.length).toBe(2)
      expect(linkedList.pop()).toBe("Item 2")
      expect(linkedList.length).toBe(1)
      expect(linkedList.pop()).toBe(value)
      expect(linkedList.length).toBe(0)
      expect(linkedList.head).toBe(null)
      expect(linkedList.tail).toBe(null)
    })

    it('Shift items', () => {
      const linkedList = new LinkedList(value)
        .push("Item 2")
      expect(linkedList.length).toBe(2)
      expect(linkedList.shift()).toBe(value)
      expect(linkedList.length).toBe(1)
      expect(linkedList.shift()).toBe("Item 2")
      expect(linkedList.length).toBe(0)
      expect(linkedList.head).toBe(null)
      expect(linkedList.tail).toBe(null)
    })

    it('Unshift items', () => {
      const linkedList = new LinkedList(value)
        .unshift("Another Item")
      expect(linkedList.length).toBe(2)
      expect(linkedList.head.value).toBe("Another Item")
      expect(linkedList.head.next.value).toBe(value)
      expect(linkedList.tail.value).toBe(value)
      expect(linkedList.tail.next).toBe(null)
    })

    it('Purge items', () => {
      const linkedList = new LinkedList(value)
        .push("Item 2")
      expect(linkedList.length).toBe(2)
      linkedList.purge()
      expect(linkedList.length).toBe(0)
      expect(linkedList.head).toBe(null)
      expect(linkedList.tail).toBe(null)
    })

    it('Convert to Array', () => {
      const linkedList = new LinkedList(value)
        .push("Item 2")
        .push("Item 3")
      expect(linkedList.toArray()).toEqual([value, "Item 2", "Item 3"])
    })

    it('Convert to Set', () => {
      const linkedList = new LinkedList(value)
        .push("Item 2")
        .push("Item 3")
      expect(linkedList.toSet()).toEqual(new Set([value, "Item 2", "Item 3"]))
    })

    it('Access items with .at()', () => {
      const linkedList = new LinkedList(value)
        .push("Item 2")
        .push("Item 3")
        .push("Item 4")
      expect(linkedList.at(0)).toBe(value)
      expect(linkedList.at(1)).toBe("Item 2")
      expect(linkedList.at(2)).toBe("Item 3")
      expect(linkedList.at(3)).toBe("Item 4")

      // Edge cases
      expect(linkedList.at(-1000)).toBe(undefined)
      expect(linkedList.at(300)).toBe(undefined)
    })
    it('Access items with .atFirst()', () => {
      const linkedList = new LinkedList(value)
      expect(linkedList.atFirst()).toBe(value)
    })
    it('Access items with .atLast()', () => {
      const linkedList = new LinkedList(value)
      expect(linkedList.atLast()).toBe(value)
      linkedList.push("Item 2")
      expect(linkedList.atLast()).toBe("Item 2")
    })
})
