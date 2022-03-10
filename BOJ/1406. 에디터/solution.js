const [str, m, ...ops] = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');
const stk = str.split('');
const tmp = [];

ops.forEach(op => {
    if (stk.length && op === 'L') tmp.push(stk.pop());
    else if (stk.length && op === 'B') stk.pop();
    else if (tmp.length && op === 'D') stk.push(tmp.pop());
    else if (op.length > 1) {
        const [_, ch] = op.split(' ');
        stk.push(ch);
    }
});
while (tmp.length) stk.push(tmp.pop());
console.log(stk.join(''));