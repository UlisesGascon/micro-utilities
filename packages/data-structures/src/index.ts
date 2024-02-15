class Node {
  value: any;
  next: Node | null;

  constructor(value: any){
      this.value = value;
      this.next = null;
  }
}

export class LinkedList {
  head: Node | null;
  tail: Node | null;
  length: number;

  constructor (value:any) {
    const node = new Node(value)
    this.head = node
    this.tail = this.head
    this.length = 1
  }

  public push (value: any):LinkedList {
    const node = new Node(value)
    if (this.head === null) {
      this.head = node;
    }
    if(this.tail !== null) {
      this.tail.next = node
    }
    this.tail = node
    this.length++
    return this
  }

  public pop () :any | undefined {
    if(this.head == null) {
      return undefined
    }

    let temp = this.head

    if(this.length === 1) {
      this.head = null
      this.tail = null
      this.length = 0
      return temp.value
    }

    while (temp.next !== null) {
      temp = temp.next
    }

    this.tail = temp
    this.tail.next = null
    this.length--
    return temp.value
  }

  public shift () :any {
    if(this.head == null) {
      return undefined
    }

    const temp = this.head
    this.head = temp.next
    this.length--
    if(this.length === 0) {
      this.tail = null
    }
    return temp.value
  }

  public unshift (value:any) :LinkedList {
    const node = new Node(value)
    if(this.head == null) {
      this.head = node
      this.tail = this.head
    } else {
      node.next = this.head
      this.head = node
    }
    this.length++
    return this
  }

  public purge () :LinkedList {
    this.head = null
    this.tail = null
    this.length = 0
    return this
  }

  public toArray (): any[] {
    const arr: any[] = []
    let current: Node | null = this.head
    while (current !== null) {
      arr.push(current.value)
      current = current.next
    }
    return arr
  }

  public toSet (): Set<any> {
    const set = new Set()
    let current: Node | null = this.head
    while (current !== null) {
      set.add(current.value)
      current = current.next
    }
    return set
  }

  public atFirst () :Node | undefined {
    return this.head?.value
  }

  public atLast () :Node | undefined {
    return this.tail?.value
  }

  public find (cb: (value: any) => boolean): Node | undefined {
    let current: Node | null = this.head
    while (current !== null) {
       // eslint-disable-next-line n/no-callback-literal
      if(cb(current?.value)) {
        break;
      }
      current = current.next
    }
    // eslint-disable-next-line @typescript-eslint/strict-boolean-expressions
    return current?.value || undefined
  }

  public findIndex (cb: (value: any) => boolean): number {
    let current: Node | null = this.head
    let index = 0
    let match = false
    while (current !== null) {
      if(cb(current.value)) {
        match = true
        break;
      }
      current = current.next
      index++
    }
    return match ? index : -1
  }

  public at (index: number) :Node | undefined {
    if(index >= this.length || index < 0) {
      return undefined
    }

    if(index === 0) {
      return this.head?.value;
    }

    if(index === (this.length - 1)) {
      return this.tail?.value
    }

    let counter = 0
    let current: Node | null = this.head
    while (counter < index) {
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      current = current!.next
      counter++
    }
    return current?.value
  }

  public insert (index: number, value: any) :LinkedList {
    if(index >= this.length) {
      return this.push(value)
    }
    if(index <= 0) {
      return this.unshift(value)
    }

    const node = new Node(value)
    let counter = 0
    let current: Node | null = this.head
    let previous: Node | null = null
    while (counter < index) {
      previous = current
      // eslint-disable-next-line
      current = current!.next
      counter++
    }
    if(previous !== null) {
      previous.next = node
    }
    node.next = current
    this.length++
    return this
  }

  public replace (index: number, value: any) :LinkedList {
    if(index >= this.length || index < 0) {
      return this
    }

    let counter = 0
    let current: Node | null = this.head
    while (counter < index) {
      // eslint-disable-next-line
      current = current!.next
      counter++
    }
    // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
    current!.value = value
    return this
  }

  public remove(index: number): any | undefined {
    if (index >= this.length || index < 0) {
      return undefined;
    }

    let removedValue: any;

    if (index === 0 && this.head !== null) {
      removedValue = this.head.value;
      this.head = this.head.next;
    } else {
      let current: Node | null = this.head;
      let previous: Node | null = null;
      let counter = 0;

      while (counter < index) {
        previous = current;
        // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
        current = current!.next;
        counter++;
      }

      if ((previous != null) && (current != null)) {
        removedValue = current.value;
        previous.next = current.next;
        if (previous.next === null) {
          this.tail = previous;
        }
      }
    }

    this.length--;
    return removedValue;
  }

  reverse(): LinkedList {
    if (this.head === null) {
      return this;
    }

    let current: Node | null = this.head;
    let prev: Node | null = null;
    let next: Node | null = null;

    while (current !== null) {
      next = current.next;
      current.next = prev;
      prev = current;
      current = next;
    }

    this.tail = this.head;
    this.head = prev;

    return this;
  }
}
