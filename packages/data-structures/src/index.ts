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
    if(this.tail != null) {
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

    while (temp.next != null) {
      temp = temp.next
    }

    this.tail = temp
    this.tail.next = null
    this.length--
    return temp.value
  }

  public shift (value:any) :any {
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
}
