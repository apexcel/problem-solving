const input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');

const solution = (len, target) => {
    const stack = [];
    let ret = '';
    for (let i = 0, cur = 1; i < len; i += 1) {
        const t = +target[i];
        while (cur <= t) {
            stack.push(cur);
            ret += '+\n';
            cur += 1;
        }
        const top = stack.pop();
        if (t === top) ret += '-\n';
        else return 'NO';
    }
    return ret;
};

console.log(solution(+input[0], input.slice(1)));