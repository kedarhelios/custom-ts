class Node {
  constructor(data) {
    this.data = data;
    this.next = null;
  }
}

class Queue {
  constructor() {
    this.head = null; // The front of the queue
    this.tail = null; // The end of the queue
  }

  // Enqueue a new element to the queue
  enqueue(data) {
    const newNode = new Node(data);
    if (this.tail === null) {
      this.head = this.tail = newNode; // If the queue is empty, both head and tail point to the new node
    } else {
      this.tail.next = newNode; // Link the current tail to the new node
      this.tail = newNode; // Move the tail pointer to the new node
    }
  }

  // Dequeue an element from the queue (remove from the front)
  dequeue() {
    if (this.isEmpty()) {
      return null; // If the queue is empty, return null
    }
    const dequeuedNode = this.head; // Save the current head node
    this.head = this.head.next; // Move the head pointer to the next node
    if (this.head === null) {
      this.tail = null; // If the queue becomes empty, set tail to null
    }
    return dequeuedNode.data; // Return the data of the dequeued node
  }

  // View the front element without removing it
  front() {
    if (this.isEmpty()) {
      return null;
    }
    return this.head.data; // Return the data of the front element
  }

  // Check if the queue is empty
  isEmpty() {
    return this.head === null;
  }

  // Print the queue (for visualization)
  printQueue() {
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
