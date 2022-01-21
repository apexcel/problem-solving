class Stack {
    constructor() {
        this.stk = [];
    }

    push(val) {
        this.stk.push(val);
    }

    pop() {
        return this.empty() ? -1 : this.stk.pop();
    }

    size() {
        return this.stk.length;
    }

    empty() {
        return this.stk.length === 0 ? 1 : 0;
    }

    top() {
        return this.empty() ? -1 : this.stk[this.stk.length - 1];
    }
}

const input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');
const stk = new Stack();
let res = '';
for (let i = 1; i <= +input[0]; i += 1) {
    const [op, val] = input[i].split(' ');
    const s = stk[op](val);
    if (s !== undefined) res += s + '\n';
}
console.log(res);