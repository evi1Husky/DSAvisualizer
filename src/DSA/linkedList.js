class LinkedList {
  constructor() {
    this.head = null;
  }

  createNode(data, next) {
    return { data, next };
  }

  addFirstNode(data) {
    this.head = this.createNode(data, this.head);
  }

  append(data) {
    if (!this.head) {
      this.addFirstNode(data);
    } else {
      let node = this.head;
      while (node.next) {
        node = node.next;
      }
      node.next = this.createNode(data, null);
    }
  }

  prepend(data) {
    if (!this.head) {
      this.addFirstNode(data);
    } else {
      const node = this.createNode(data, null);
      node.next = this.head;
      this.head = node;
    }
  }

  insertAfter(key, data) {
    let node = this.head;
    while (node && node.data !== key) {
      node = node.next;
    }
    if (node) {
      node.next = this.createNode(data, node.next);
    }
  }

  insertBefore(key, data) {
    if (!this.head) {
      return;
    }
    if (this.head.data === key) {
      this.prepend(data);
      return;
    }
    let previousNode = null;
    let node = this.head;
    while (node && node.data !== key) {
      previousNode = node;
      node = node.next;
    }
    if (node) {
      previousNode.next = this.createNode(data, node);
    }
  }

  removeFirst() {
    if (this.head) {
      this.head = this.head.next;
    }
  }

  removeLast() {
    if (this.head) {
      if (!this.head.next) {
        this.removeFirst();
        return;
      }
    }
    let node = this.head;
    while (node.next) {
      if (!node.next.next) {
        node.next = null;
        return;
      }
      node = node.next;
    }
  }

  removeItem(key) {
    if (this.head) {
      let targetNode = this.head;
      let nextNode = targetNode.next;
      while (nextNode && nextNode.data != key) {
        targetNode = nextNode;
        nextNode = nextNode.next;
      }
      if (this.head.data === key) {
        this.removeFirst();
      } else if (nextNode) {
        if (nextNode.data === key) {
          targetNode.next = nextNode.next;
        }
      }
    }
  }
}
