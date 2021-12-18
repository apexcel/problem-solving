const input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');
let res = '';

const isValidParenthesis = ps => {
    const stack = [];
    for (let i = 0; i < ps.length; i += 1) {
        if (ps[i] === '(') stack.push(1);
        else {
            if (!stack.length) return false;
            stack.pop();
        }
    }
    return !stack.length;
};
input.slice(1).forEach(ps => res += (isValidParenthesis(ps) ? 'YES' : 'NO') + '\n');
console.log(res);
