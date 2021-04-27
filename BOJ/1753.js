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

const sc = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');
const [V, E] = sc[0].split(' ').map(v => parseInt(v, 10));
const BEGIN = parseInt(sc[1], 10);
// const graph = Array.from(Array(V + 1), () => Array());
const graph = [];
const dist = [];

for (let i = 0; i < V + 1; i += 1) {
    dist[i] = Infinity;
    graph[i] = new Array();
}

for (let i = 2; i < E + 2; i += 1) {
    const [u, v, w] = sc[i].split(' ');
    graph[Number(u)].push([Number(v), Number(w)]);
}

const pq = new MinHeap(null);
// const dist = Array(V + 1).fill(Infinity);

dist[BEGIN] = 0;
pq.insert([BEGIN, 0]);

while (pq.heap.length > 0) {
    const [node, weight] = pq.pop();
    if (dist[node] < weight) continue;

    for (let i = 0; i < graph[node].length; i += 1) {
        const [nn, nw] = graph[node][i];
        if (dist[nn] > weight + nw) {
            dist[nn] = weight + nw;
            pq.insert([nn, weight + nw]);
        }
    }
}

let print = '';
for (let i = 1; i < dist.length; i += 1) {
    print += (dist[i] == Infinity) ? 'INF\n' : dist[i] + '\n';
};
console.log(print);