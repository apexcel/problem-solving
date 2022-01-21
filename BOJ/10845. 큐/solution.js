class QueueNode {
    constructor(value) {
        this.next = null;
        this.value = value;
    }
}

class Queue {
    constructor() {
        this.head = null;
        this.tail = null;
        this._size = 0;
    }

    push(val) {
        const node = new QueueNode(val);
        this._size += 1;
        if (!this.head) {
            this.head = node;
            this.tail = node;
            return;
        }
        this.tail.next = node;
        this.tail = node;
    }

    pop() {
        if (this.empty()) {
            this.tail = null;
            return -1;
        }
        const ret = this.head.value;
        this.head = this.head.next;
        this._size -= 1;
        return ret;
    }

    size() {
        return this._size;
    }

    front() {
        if (this.empty()) return -1;
        return this.head.value;
    }

    back() {
        if (this.empty()) return -1;
        return this.tail.value;
    }

    empty() {
        return this._size === 0 ? 1 : 0;
    }
}

const input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');
const q = new Queue();
let res = '';
for (let i = 1; i <= +input[0]; i += 1) {
    const [op, val] = input[i].split(' ');
    const s = q[op](val);
    if (s !== undefined) res += s + '\n';
}
console.log(res);