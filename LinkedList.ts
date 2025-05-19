class ElementNode<T> {
  data: T;
  next: ElementNode<T> | null;

  constructor(data: T) {
    this.data = data;
    this.next = null;
  }
}

class LinkedList<T> {
  head: ElementNode<T> | null;

  constructor() {
    this.head = null;
  }

  // Add a node to the end of the list
  append(data: T): void {
    const newNode = new ElementNode(data);
    if (this.head === null) {
      this.head = newNode;
    } else {
      let current: ElementNode<T> = this.head;
      while (current.next !== null) {
        current = current.next;
      }
      current.next = newNode;
    }
  }

  // Add a node at the beginning
  prepend(data: T): void {
    const newNode = new ElementNode(data);
    newNode.next = this.head;
    this.head = newNode;
  }

  // Traverse the list and print all values
  printList(): void {
    let current: ElementNode<T> | null = this.head;
    let result = "";
    while (current !== null) {
      result += `${current.data} -> `;
      current = current.next;
    }
    result += "null";
    console.log(result);
  }

  // Search for a value in the list
  search(data: T): boolean {
    let current: ElementNode<T> | null = this.head;
    while (current !== null) {
      if (current.data === data) {
        return true;
      }
      current = current.next;
    }
    return false;
  }

  // Delete a node by value
  delete(data: T): void {
    if (this.head === null) return;

    if (this.head.data === data) {
      this.head = this.head.next;
      return;
    }

    let current: ElementNode<T> = this.head;
    while (current.next !== null && current.next.data !== data) {
      current = current.next;
    }

    if (current.next !== null) {
      current.next = current.next.next;
    }
  }
}

// Usage
const list = new LinkedList<number>();

list.append(10);
list.append(20);
list.append(30);

list.printList(); // 10 -> 20 -> 30 -> null

list.prepend(5);
list.printList(); // 5 -> 10 -> 20 -> 30 -> null

console.log(list.search(20)); // true
console.log(list.search(40)); // false

list.delete(20);
list.printList(); // 5 -> 10 -> 30 -> null
