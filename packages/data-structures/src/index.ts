class Node {
  value: any;
  next: Node | null;

  constructor(value: any){
      this.value = value;
      this.next = null;
  }
}

export class LinkedList {
  head: Node;
  tail: Node;
  length: number;

  constructor (value:any) {
    const node = new Node(value)
    this.head = node
    this.tail = this.head
    this.length = 1
  }
}
