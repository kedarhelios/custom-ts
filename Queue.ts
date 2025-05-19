class ElementNode<T> {
  data: T;
  next: ElementNode<T> | null;

  constructor(data: T) {
    this.data = data;
    this.next = null;
  }
}

class Queue<T> {
  private head: ElementNode<T> | null;
  private tail: ElementNode<T> | null;

  constructor() {
    this.head = null;
    this.tail = null;
  }

  enqueue(data: T): void {
    const newNode = new ElementNode<T>(data);
    if (this.tail === null) {
      this.head = this.tail = newNode;
    } else {
      this.tail.next = newNode;
      this.tail = newNode;
    }
  }

  dequeue(): T | null {
    if (this.isEmpty()) {
      return null;
    }
    const dequeuedNode = this.head!;
    this.head = this.head!.next;
    if (this.head === null) {
      this.tail = null;
    }
    return dequeuedNode.data;
  }

  front(): T | null {
    return this.isEmpty() ? null : this.head!.data;
  }

  isEmpty(): boolean {
    return this.head === null;
  }

  printQueue(): void {
    let current = this.head;
    let result = "";
    while (current !== null) {
      result += current.data + " -> ";
      current = current.next;
    }
    result += "null";
    console.log(result);
  }
}


const q = new Queue<number>();
q.enqueue(1);
q.enqueue(2);
q.enqueue(3);

console.log(q.dequeue()); // Output: 1
console.log(q.dequeue()); // Output: 2
