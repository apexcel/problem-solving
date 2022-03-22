---
문제번호: 9205
문제이름: '맥주 마시면서 걸어가기'
주소: 'https://www.acmicpc.net/problem/9205'
분류: ['그래프 이론', '그래프 탐색', '너비 우선 탐색']
---

# 풀이

## 첫 번째 풀이

다익스트라, 오래 걸린다. 전처리 오버헤드가 커서 그런듯.

```js
const [tc, ...data] = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');

class MinHeap {
    constructor(item, cmp) {
        this.heap = [];
        if (cmp) {
            this.cmp = cmp;
        }
        if (item instanceof Array) {
            this.heap = item;
        }
        else if (item) {
            this.heap.push(item);
        }
        this.makeHeap();
    }

    getParent = pos => pos - 1 > 0 ? Math.floor((pos - 1) / 2) : 0;

    getLeft = pos => (2 * pos) + 1;

    getRight = pos => (2 * pos) + 2;

    getMinChild = pos => {
        const left = this.getLeft(pos);
        const right = this.getRight(pos);
        let smaller = left;

        if (right < this.heap.length) {
            if (this.cmp) {
                smaller = this.cmp(this.heap[left], this.heap[right]) ? left : right;
            }
            else {
                smaller = this.heap[left] < this.heap[right] ? left : right;
            }
        }
        return smaller;
    }

    __swap = (a, b) => {
        let temp = this.heap[a];
        this.heap[a] = this.heap[b];
        this.heap[b] = temp;
    };

    __siftUp = () => {
        let current = this.heap.length - 1;
        let condition = current => this.heap[current] < this.heap[this.getParent(current)];

        if (this.cmp) {
            condition = current => this.heap[current] && this.heap[this.getParent(current)] && this.cmp(this.heap[current], this.heap[this.getParent(current)]);
        }
        while (condition(current)) {
            this.__swap(current, this.getParent(current));
            current = this.getParent(current);
        }
    }

    __siftDown = (current) => {
        let condition = (current, mc) => this.heap[current] > this.heap[mc];
        if (this.cmp) {
            condition = (current, mc) => this.heap[current] && this.heap[mc] && !this.cmp(this.heap[current], this.heap[mc]);
        }

        while (this.getLeft(current) < this.heap.length) {
            let mc = this.getMinChild(current);
            if (condition(current, mc)) {
                this.__swap(current, mc)
            }
            current = mc;
        }
    }

    decreaseKey = (index, value) => {
        this.heap[index] = value;
        this.__siftDown(0);
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

    top = () => {
        return this.heap[0];
    }

    makeHeap = () => {
        const len = Math.floor(this.heap.length / 2);
        for (let i = len; i >= 0; i -= 1) {
            this.minHeapify(i)
        }
    }

    minHeapify = index => {
        const min = this.getMinChild(index);
        const condition = this.cmp
            ? this.heap[min] && this.heap[index] && this.cmp(this.heap[min], this.heap[index])
            : this.heap[min] < this.heap[index];

        if (condition && index !== min) {
            this.__swap(min, index);
            this.minHeapify(min);
        }
    }
}

const preprocess = () => {
    const ret = [];
    for (let i = 0; i < data.length; i += 1) {
        const range = parseInt(data[i]) + 2;
        const mapped = data.slice(i + 1, i + range + 1).map(d => d.split(' ').map(Number));
        const item = {
            v: range,
            g: createGraph(mapped)
        }
        ret.push(item);
        i += range;
    }
    return ret;
}

const createGraph = (data) => {
    const graph = Array.from(Array(data.length), () => []);
    const { abs } = Math;

    for (let i = 0; i < data.length; i += 1) {
        const [dx, dy] = data[i];
        for (let j = 0; j < data.length; j += 1) {
            const [cx, cy] = data[j];
            if (i !== j) {
                graph[i].push([j, abs(dx - cx) + abs(dy - cy)])
            }
        }
    }
    return graph;
}

const solution = (item) => {
    const { v, g } = item;
    const pq = new MinHeap(null);
    const dist = Array(v).fill(Infinity);
    dist[0] = 0;
    pq.insert([0, 0]);

    while (pq.heap.length) {
        const [node, weight] = pq.pop();
        if (dist[node] < weight) continue;

        for (let i = 0; i < g[node].length; i += 1) {
            const [nn, nw] = g[node][i];
            if (dist[nn] > weight + nw && nw <= 1000) {
                dist[nn] = weight + nw;
                pq.insert([nn, weight + nw]);
            }
        }
    }
    if (dist.at(-1) === Infinity) console.log('sad');
    else console.log('happy');
}

const items = preprocess();
items.forEach(item => solution(item));
```

## 두 번째 풀이

플로이드-와샬

```js
const [tc, ...data] = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');

const distance = (a, b) => Math.abs(a[0] - b[0]) + Math.abs(a[1] - b[1]);

const preprocess = () => {
    const ret = [];
    for (let i = 0; i < data.length; i += 1) {
        const range = parseInt(data[i]) + 2;
        const mapped = data.slice(i + 1, i + range + 1).map(d => d.split(' ').map(Number));
        const matrix = Array.from(Array(range), () => []);

        for (let j = 0; j < range; j += 1) {
            for (let k = 0; k < range; k += 1) {
                matrix[j][k] = distance(mapped[j], mapped[k]);
            }
        }
        ret.push({ range, matrix });
        i += range;
    }
    return ret;
}

const solution = (item) => {
    const { range, matrix } = item;
    for (let k = 0; k < range; k += 1) {
        for (let i = 0; i < range; i += 1) {
            for (let j = 0; j < range; j += 1) {
                if (matrix[i][k] <= 1000 && matrix[k][j] <= 1000) {
                    matrix[i][j] = 0;
                }
            }
        }
        if (!matrix[0].at(-1)) {
            console.log('happy');
            return;
        }
    }
    console.log('sad');
}

preprocess().forEach(solution);
```