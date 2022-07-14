class Node {
  constructor(key, prev, next) {
    this.key = key;
    this.prev = prev;
    this.next = next;
  }
}

class Deque {
  constructor() {
    this.head = null;
    this.tail = null;
    this._size = 0;
  }

  push(x, pos) {
    const node = new Node(x);
    this._size += 1;

    if (!this.head) {
      this.head = node;
      this.tail = node;
      this.head.prev = this.tail;
      this.head.next = this.tail;
      this.tail.prev = this.head;
      this.tail.next = this.head;
      return;
    }

    node.next = this.head;
    node.prev = this.tail;
    this.head.prev = node;
    this.tail.next = node;
    pos === 'front' ? this.head = node : this.tail = node;
  }

  push_front(x) {
    this.push(x, 'front');
  }

  push_back(x) {
    this.push(x, 'back');
  }

  pop_front() {
    if (!this._size) return -1;
    const ret = this.head;
    this.head = this.head.next;
    this.head.prev = this.tail;

    if (this._size === 1) {
      this.head = null;
      this.tail = null;
    }
    this._size -= 1;
    return ret.key;
  }

  pop_back() {
    if (!this._size) return -1;

    const ret = this.tail;
    this.tail = this.tail.prev;
    this.tail.next = this.head;

    if (this._size === 1) {
      this.head = null;
      this.tail = null;
    }
    this._size -= 1;
    return ret.key;
  }

  size() {
    return this._size;
  }

  empty() {
    return this._size ? 0 : 1;
  }

  front() {
    return this.head ? this.head.key : -1;
  }

  back() {
    return this.tail ? this.tail.key : -1;
  }
}


const [n, ...data] = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');
const commands = data.map(d => d.split(' '));
const deque = new Deque();
const res = [];

for (const [cmd, arg] of commands) {
  const ans = deque[cmd](arg);
  if (ans !== undefined) {
    res.push(ans);
  }
}

console.log(res.join('\n'));
