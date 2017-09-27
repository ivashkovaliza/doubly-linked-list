const Node = require('./node');

class LinkedList {
    constructor() {
        this.clear();
    }

    append(data) {
        let currentNode = this._head;
        while (currentNode != this._tail) {
            currentNode = currentNode.next;
        }
        currentNode.data = data;
        currentNode.next = new Node();
        currentNode.next.prev = currentNode;
        this._tail = currentNode.next;
        this.length += 1;
        return this; 
    }

    head() {
        return this._head.data;
    }

    tail() {
        if (this._tail.prev == null)
            return null;
        return this._tail.prev.data;
    }

    at(index) {
        let currentNode = this._head;
        for (var i = 0; i < index; i++) {
            if (currentNode.next == null)
                return null;
            currentNode = currentNode.next;
        }
        if (currentNode.next == null)
            return null;
        return currentNode.data;
    }

    insertAt(index, data) {
        let currentNode = this._head;
        for (var i = 0; i < index - 1; i++) {
            if (currentNode.next == null)
                return null;
            currentNode = currentNode.next;
        }
        if (currentNode.next == null)
            return;
        let newNode = new Node(data, currentNode, currentNode.next);
        currentNode.next = newNode;
        newNode.next.prev = newNode;
        this.length += 1;
        return this; 
    }

    isEmpty() {
        return this.length == 0;
    }

    clear() {
        this.length = 0;
        this._head = new Node();
        this._tail = this._head;
        return this; 
    }

    deleteAt(index) {
        let currentNode = this._head;
        for (var i = 0; i < index; i++) {
            if (currentNode.next == null)
                return null;
            currentNode = currentNode.next;
        }
        if (currentNode.next == null)
            return;
        currentNode.prev.next = currentNode.next;
        currentNode.next.prev = currentNode.prev;
        this.length -= 1;
        return this; 
    }

    reverse() {
        this._tail = this._tail;

        let currentNode = this._head;
        let tempNode, tempNode2;
        while (currentNode != this._tail) {
            tempNode = currentNode;
            currentNode = currentNode.next;
            tempNode2 = tempNode.prev;
            tempNode.prev = tempNode.next;
            tempNode.next = tempNode2;
        }
        tempNode2 = this._head;
        this._head = this._tail.prev;
        this._tail = tempNode2;

        this._tail.next = new Node(); 
        this._tail.next.prev = this._tail; 
        this._tail = this._tail.next;
        return this; 
    }

    indexOf(data) {
        let currentNode = this._head;
        let index = 0;
        while (currentNode != this._tail) {
            if (currentNode.data === data) {
                return index;
            }
            currentNode = currentNode.next;
            index += 1;
        }
        return -1;
    }
}

module.exports = LinkedList;
