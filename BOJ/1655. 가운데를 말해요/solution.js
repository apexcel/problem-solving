// MAXHEAP => new Heap(null, {type: 'MAX'})
// MINHEAP => new Heap(null, {type: 'MIN'})

class Heap {
    #heap;

    constructor(item, { compare, type }) {
        this.#heap = [];
        this.type = type ? type : 'MIN';
        this.setCompare(compare);
        if (item) {
            if (item instanceof Array) this.#heap = item;
            else this.#heap.push(item);
            this.createHeap();
        }
    }

    get size() {
        return this.getHeap().length;
    }

    isEmpty() {
        return !this.size;
    }

    setCompare(compare) {
        this.compare = compare;
    }

    createHeap() {
        const heap = this.getHeap();
        const len = Math.floor(heap.length / 2);
        for (let i = len; i >= 0; i -= 1) {
            this.#heapify(i);
        }
    }

    #heapify(idx) {
        const minChildIndex = this.getMinChildIndex(idx)
            , maxChildIndex = this.getMaxChildIndex(idx);

        if (this.type === 'MIN') {
            if (idx !== minChildIndex && this.#heap[minChildIndex] < this.#heap[idx]) {
                this.swap(minChildIndex, idx);
                this.#heapify(minChildIndex);
            }
        }
        else {
            if (idx !== maxChildIndex && this.#heap[maxChildIndex] < this.#heap[idx]) {
                this.swap(maxChildIndex, idx);
                this.#heapify(maxChildIndex);
            }
        }
    }

    getParentIndex(pos) {
        return pos - 1 > 0 ? Math.floor((pos - 1) / 2) : 0;
    }

    getLeftIndex(pos) {
        return (2 * pos) + 1;
    }

    getRightIndex(pos) {
        return (2 * pos) + 2;
    }

    getMinChildIndex(idx) {
        const heap = this.getHeap()
            , left = this.getLeftIndex(idx)
            , right = this.getRightIndex(idx);
        let smaller = left;

        if (right < heap.length) {
            if (this.compare) {
                smaller = this.compare(heap[left], heap[right]) ? left : right;
            }
            else {
                smaller = heap[left] < heap[right] ? left : right;
            }
        }
        return smaller;
    }

    getMaxChildIndex(idx) {
        const heap = this.getHeap()
            , left = this.getLeftIndex(idx)
            , right = this.getRightIndex(idx);
        let bigger = left;

        if (right < heap.length) {
            if (this.compare) {
                bigger = this.compare(heap[left], heap[right]) ? left : right;
            }
            else {
                bigger = heap[left] > heap[right] ? left : right;
            }
        }
        return bigger;
    }

    getHeap() {
        return this.#heap;
    }

    swap(idx1, idx2) {
        [this.#heap[idx1], this.#heap[idx2]] = [this.#heap[idx2], this.#heap[idx1]]
    }

    top() {
        return this.#heap[0];
    }

    extract() {
        if (!this.#heap.length) return;
        const ret = this.#heap[0];
        this.swap(0, this.#heap.length - 1);
        this.#heap.length -= 1;
        this.type === 'MIN' ? this.#siftDownMin(0) : this.#siftDownMax(0);
        return ret;
    }

    insert(key) {
        this.#heap.push(key);
        this.type === 'MIN' ? this.#siftUpMin() : this.#siftUpMax();
    }


    #siftUpMax() {
        let currentIndex = this.#heap.length - 1;
        const condition = (idx) => {
            const a = this.#heap[idx], b = this.#heap[this.getParentIndex(idx)];
            return this.compare ? this.compare(a, b) : a > b;
        }

        while (condition(currentIndex)) {
            this.swap(currentIndex, this.getParentIndex(currentIndex));
            currentIndex = this.getParentIndex(currentIndex);
        }
    }

    #siftUpMin() {
        let currentIndex = this.#heap.length - 1;
        const condition = (idx) => {
            const a = this.#heap[idx], b = this.#heap[this.getParentIndex(idx)];
            return this.compare ? this.compare(a, b) : a < b;
        }

        while (condition(currentIndex)) {
            this.swap(currentIndex, this.getParentIndex(currentIndex));
            currentIndex = this.getParentIndex(currentIndex);
        }

    }

    #siftDownMax(index) {
        const condition = (a, b) => this.compare ? !this.compare(a, b) : a < b;

        while (this.getLeftIndex(index) < this.#heap.length) {
            const mxChildIdx = this.getMaxChildIndex(index);

            if (condition(this.#heap[index], this.#heap[mxChildIdx])) {
                this.swap(index, mxChildIdx);
            }
            index = mxChildIdx;
        }
    }

    #siftDownMin(index) {
        const condition = (a, b) => this.compare ? !this.compare(a, b) : a > b;

        while (this.getLeftIndex(index) < this.#heap.length) {
            const mnChildIdx = this.getMinChildIndex(index);
            if (condition(this.#heap[index], this.#heap[mnChildIdx])) {
                this.swap(index, mnChildIdx);
            }
            index = mnChildIdx;
        }
    }
}

const [n, ...data] = require('fs').readFileSync('./data.in').toString().trim().split('\n').map(Number);

const mx = new Heap(null, { type: 'MAX' });
const mn = new Heap(null, { type: 'MIN' });
let res = '';

for (let d of data) {
    if (mx.size <= mn.size) {
        mx.insert(d);
    }
    else {
        mn.insert(d);
    }
    if (!mx.isEmpty() && !mn.isEmpty()) {
        if (mx.top() > mn.top()) {
            const mxv = mx.extract(), mnv = mn.extract();
            mx.insert(mnv);
            mn.insert(mxv);
        }
    }
    res += mx.top() + '\n';
}

console.log(res);
