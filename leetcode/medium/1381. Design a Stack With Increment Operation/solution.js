// https://leetcode.com/problems/design-a-stack-with-increment-operation/
class CustomStack {
    /**
     * @param {number} maxSize 
     */
    constructor(maxSize) {
        this.size = maxSize;
        this.stack = [];
    }

    /**
     *  @param {number} x
     *  @return {void}
     */
    push(x) {
        if (this.stack.length >= this.size) return;
        this.stack.push(x);
    }

    /**
     * @return {number}
     */
    pop() {
        if (this.stack.length === 0) return -1;
        return this.stack.pop();
    }

    /**
     * @param {number} k 
     * @param {number} val 
     * @return {void}
     */
    increment(k, val) {
        if (this.stack.length < k) k = this.stack.length;
        for (let i = 0; i < k; i += 1) {
            this.stack[i] += val;
        }
    }
}