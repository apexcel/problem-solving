class Node {
    constructor(key, prev, next) {
        this.key = key;
        this.prev = prev;
        this.next = next;
    }
}

class Queue {
    #head = null;
    #tail = null;
    #size = 0;

    constructor() { }

    size() {
        return this.#size;
    }

    push(key) {
        const node = new Node(key);

        this.#size += 1;
        if (!this.#head) {
            this.#head = this.#tail = node;
            this.#head.next = this.#head.prev = this.#tail;
            this.#tail.next = this.#tail.prev = this.#head;
            return;
        }


        this.#tail.next = node;
        node.prev = this.#tail;
        node.next = this.#head;
        this.#tail = node;
    }

    pop() {
        if (this.#size === 0) return -1;

        this.#size -= 1;
        const firstNode = this.#head;
        this.#head = this.#head.next;
        this.#head.prev = this.#tail;
        this.#tail.next = this.#head;

        if (!this.#size) this.#head = this.#tail = null;

        return firstNode.key;
    }

    empty() {
        return !this.#size ? 1 : 0;
    }

    front() {
        return this.#size ? this.#head.key : -1;
    }

    back() {
        return this.#size ? this.#tail.key : -1;
    }
}

const [n, ...commands] = require('fs').readFileSync('./data.in').toString().trim().split('\n');
const q = new Queue();
const res = [];

for (let command of commands) {
    const query = command.split(' ');
    if (query.length > 1) {
        q.push(query[1]);
        continue;
    }
    
    res.push(q[query[0]]());
}

console.log(res.join('\n'));