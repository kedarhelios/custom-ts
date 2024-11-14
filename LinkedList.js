class Node {
  constructor(data) {
    this.data = data; // Store the value of the node
    this.next = null; // The pointer to the next node, initially set to null
  }
}

class LinkedList {
  constructor() {
    this.head = null; // Initially, the list is empty
  }

  // Method to add a node to the end of the list
  append(data) {
    const newNode = new Node(data); // Create a new node
    if (this.head === null) {
      this.head = newNode; // If list is empty, the new node becomes the head
    } else {
      let current = this.head; // Start at the head of the list
      while (current.next !== null) {
        current = current.next; // Traverse to the end of the list
      }
      current.next = newNode; // Set the next pointer of the last node to the new node
    }
  }

  // Method to add a node at the beginning
  prepend(data) {
    const newNode = new Node(data); // Create a new node
    newNode.next = this.head; // The new node points to the current head
    this.head = newNode; // The head of the list is now the new node
  }

  // Method to traverse the list and print all values
  printList() {
    let current = this.head;
    let result = "";
    while (current !== null) {
      result += current.data + " -> "; // Append node data to the result
      current = current.next; // Move to the next node
    }
    result += "null"; // Indicate the end of the list
    console.log(result);
  }

  // Method to search for a value in the list
  search(data) {
    let current = this.head;
    while (current !== null) {
      if (current.data === data) {
        return true; // Value found
      }
      current = current.next; // Move to the next node
    }
    return false; // Value not found
  }

  // Method to delete a node by value
  delete(data) {
    if (this.head === null) {
      return; // List is empty, nothing to delete
    }

    // If the head node itself holds the data to be deleted
    if (this.head.data === data) {
      this.head = this.head.next; // Move head to the next node
      return;
    }

    // Otherwise, find the node to delete
    let current = this.head;
    while (current.next !== null && current.next.data !== data) {
      current = current.next; // Traverse to find the node before the one to delete
    }

    // If we've found the node to delete
    if (current.next !== null) {
      current.next = current.next.next; // Bypass the node to delete
    }
  }
}

const list = new LinkedList();

// Add nodes
list.append(10);
list.append(20);
list.append(30);

// Print the list
list.printList(); // Output: 10 -> 20 -> 30 -> null

// Add a node at the beginning
list.prepend(5);
list.printList(); // Output: 5 -> 10 -> 20 -> 30 -> null

// Search for a value
console.log(list.search(20)); // Output: true
console.log(list.search(40)); // Output: false

// Delete a node
list.delete(20);
list.printList(); // Output: 5 -> 10 -> 30 -> null
