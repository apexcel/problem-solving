const query = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');
const stack = [];

for (let i = 1; i < query.length; i += 1) {
    const v = +query[i];
    v === 0 ? stack.pop() : stack.push(v);
}
console.log(stack.reduce((prev, cur) => prev + cur, 0));
