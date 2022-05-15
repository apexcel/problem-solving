const MinHeap = class {
    #heap = [];
    constructor(arr) {
        this.size = 0;
        if (arr) {
            this.#heap = arr;
            this.size = arr.length;
            this.createHeap();
        }
    }

    createHeap() {
        const len = Math.floor(this.#heap.length / 2);
        for (let i = len; i >= 0; i -= 1) {
            this.#heapify(i);
        }
    }

    isEmpty() {
        return !this.size;
    }

    #heapify(idx) {
        const minChildIndex = this.#getMinChildIndex(idx);

        if (idx !== minChildIndex && this.#heap[minChildIndex] < this.#heap[idx]) {
            this.#swap(minChildIndex, idx);
            this.#heapify(minChildIndex);
        }
    }

    #getParentIndex(index) {
        return index > 1 ? Math.floor((index - 1) / 2) : 0;
    }

    #getLeftChildIndex(index) {
        return (2 * index) + 1;
    }

    #getRightChildIndex(index) {
        return (2 * index) + 2;
    }

    #getMinChildIndex(idx) {
        const left = this.#getLeftChildIndex(idx)
            , right = this.#getRightChildIndex(idx);
        let smaller = left;

        if (right < this.#heap.length) {
            smaller = this.#heap[left] < this.#heap[right] ? left : right;
        }
        return smaller;
    }

    #swap(idx1, idx2) {
        [this.#heap[idx1], this.#heap[idx2]] = [this.#heap[idx2], this.#heap[idx1]]
    }

    #shiftUp() {
        let currentIndex = this.#heap.length - 1;
        while (this.#heap[currentIndex] < this.#heap[this.#getParentIndex(currentIndex)]) {
            this.#swap(currentIndex, this.#getParentIndex(currentIndex));
            currentIndex = this.#getParentIndex(currentIndex);
        }
    }

    #shiftDown(index) {
        while (this.#getLeftChildIndex(index) < this.#heap.length) {
            const minChildIndex = this.#getMinChildIndex(index);
            if (this.#heap[index] > this.#heap[minChildIndex]) {
                this.#swap(index, minChildIndex);
            }
            index = minChildIndex;
        }
    }

    insert(key) {
        this.#heap.push(key);
        this.size += 1;
        this.#shiftUp();
    }

    extract() {
        if (!this.#heap.length) return;
        const ret = this.#heap[0];
        this.#swap(0, this.#heap.length - 1);
        this.#heap.length -= 1;
        this.size -= 1;
        this.#shiftDown(0);
        return ret;
    }

    getHeap() {
        return this.#heap;
    }
}

const [n, ...data] = require('fs').readFileSync('./data.in').toString().trim().split('\n').map(Number);
const minHeap = new MinHeap(data);

let res = 0;
while (minHeap.size > 1) {
    const a = minHeap.extract();
    const b = minHeap.extract();
    res += a + b;
    minHeap.insert(a + b);
}
console.log(res);
