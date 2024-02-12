class Node {
  value: any;
  next: Node | null;

  constructor(value){
      this.value = value;
      this.next = null;
  }
}

export class LinkedList {
  head: Node;
  tail: Node;
  length: number;

  constructor (value) {
    const node = new Node(value)
    this.head = node
    this.tail = this.head
    this.length = 1
  }
}
