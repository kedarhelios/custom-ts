class ElementNode<T> {
  data: T;
  next: ElementNode<T> | null;

  constructor(data: T) {
    this.data = data;
    this.next = null;
  }
}

class Stack<T> {
  private top: ElementNode<T> | null;

  constructor() {
    this.top = null; // The stack is initially empty
  }

  // Push a new element onto the stack
  push(data: T): void {
    const newNode = new ElementNode<T>(data);
    newNode.next = this.top;
    this.top = newNode;
  }

  // Pop an element from the stack (remove from the top)
  pop(): T | null {
    if (this.isEmpty()) {
      return null;
    }
    const poppedNode = this.top!;
    this.top = poppedNode.next;
    return poppedNode.data;
  }

  // Peek at the top element without removing it
  peek(): T | null {
    return this.top ? this.top.data : null;
  }

  // Check if the stack is empty
  isEmpty(): boolean {
    return this.top === null;
  }

  // Print the stack (for visualization)
  printStack(): void {
    let current: ElementNode<T> | null = this.top;
    let result = "";
    while (current !== null) {
      result += `${current.data} -> `;
      current = current.next;
    }
    result += "null";
    console.log(result);
  }
}
