const [n, ...parentheses] = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');
let res = '';

const isValidParenthesis = ps => {
    let cnt = 0;
    for (let i = 0; i < ps.length; i += 1) {
        if (ps[i] === '(') cnt += 1;
        else {
            if (!cnt) return false;
            cnt -= 1;
        }
    }
    return !cnt;
};
parentheses.forEach(ps => res += (isValidParenthesis(ps) ? 'YES' : 'NO') + '\n');
console.log(res);
