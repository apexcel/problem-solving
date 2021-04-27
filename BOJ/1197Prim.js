class MinHeap {
    constructor() {
        this.heap = [];
    }

    cmp = (a, b) => a[1] < b[1];

    getParent = pos => pos - 1 > 0 ? Math.floor((pos - 1) / 2) : 0;

    getLeft = pos => (2 * pos) + 1;

    getRight = pos => (2 * pos) + 2;

    getMinChild = pos => {
        const left = this.getLeft(pos);
        const right = this.getRight(pos);
        let smaller = left;

        if (right < this.heap.length) {
            smaller = this.cmp(this.heap[left], this.heap[right]) ? left : right;
        }
        return smaller;
    }

    __swap = (a, b) => {
        let temp = this.heap[a];
        this.heap[a] = this.heap[b];
        this.heap[b] = temp;
    };

    __siftUp = () => {
        const condition = current => this.cmp(this.heap[current], this.heap[this.getParent(current)]);
        let current = this.heap.length - 1;

        while (condition(current)) {
            this.__swap(current, this.getParent(current));
            current = this.getParent(current);
        }
    }

    __siftDown = (current) => {
        const condition = (current, mc) => !this.cmp(this.heap[current], this.heap[mc]);

        while (this.getLeft(current) < this.heap.length) {
            let mc = this.getMinChild(current);
            if (condition(current, mc)) {
                this.__swap(current, mc)
            }
            current = mc;
        }
    }

    insert = key => {
        this.heap.push(key);
        this.__siftUp();
    }

    pop = () => {
        if (this.heap.length) {
            const ret = this.heap[0];
            this.heap[0] = this.heap[this.heap.length - 1];
            this.heap.length -= 1;
            this.__siftDown(0);
            return ret;
        }
    }

    top = () => this.heap[0];

    makeHeap = () => {
        const len = Math.floor(this.heap.length / 2);
        for (let i = len; i >= 0; i -= 1) {
            this.minHeapify(i);
        }
    }

    minHeapify = index => {
        const min = this.getMinChild(index);
        const condition = (min, index) => this.cmp(this.heap[min], this.heap[index]);

        if (condition(min, index) && index !== min) {
            this.__swap(min, index);
            this.minHeapify(min);
        }
    }
}

const fs = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');
const [V, E] = fs[0].split(' ').map(v => parseInt(v, 10));
const graph = Array.from(Array(V + 1), () => Array());
const isVisited = Array(V + 1).fill(false);

for (let i = 1; i < fs.length; i += 1) {
    const [u, v, w] = fs[i].split(' ').map(e => parseInt(e, 10));
    graph[u].push([v, w]);
    graph[v].push([u, w]);
}

const dist = new MinHeap();
let sum = 0;

dist.insert([1, 0]);
while (dist.heap.length) {
    const [node, weight] = dist.pop();
    if (!isVisited[node]) {
        isVisited[node] = true;
        sum += weight;

        for (let i = 0; i < graph[node].length; i += 1) {
            const next = graph[node][i];
            if (!isVisited[next[0]]) {
                dist.insert(next);
            }
        }
    }
}
console.log(sum);