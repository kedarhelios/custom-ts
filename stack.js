class Node {
  constructor(data) {
    this.data = data;
    this.next = null;
  }
}

class Stack {
  constructor() {
    this.top = null; // The stack is initially empty
  }

  // Push a new element onto the stack
  push(data) {
    const newNode = new Node(data);
    newNode.next = this.top; // New node points to the current top
    this.top = newNode; // The new node becomes the top of the stack
  }

  // Pop an element from the stack (remove from the top)
  pop() {
    if (this.isEmpty()) {
      return null; // If the stack is empty, return null
    }
    const poppedNode = this.top; // Save the current top node
    this.top = this.top.next; // Move the top pointer to the next node
    return poppedNode.data; // Return the data of the popped node
  }

  // Peek at the top element without removing it
  peek() {
    if (this.isEmpty()) {
      return null;
    }
    return this.top.data; // Return the data of the top element
  }

  // Check if the stack is empty
  isEmpty() {
    return this.top === null;
  }

  // Print the stack (for visualization)
  printStack() {
    let current = this.top;
    let result = "";
    while (current !== null) {
      result += current.data + " -> ";
      current = current.next;
    }
    result += "null";
    console.log(result);
  }
}
