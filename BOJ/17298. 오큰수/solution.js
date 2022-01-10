const [len, nums] = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');
const solution = (n, arr) => {
    const stack = [];
    let res = [];

    for (let i = n; i > 0; i -= 1) {
        const cur = +arr[i - 1], prev = +arr[i];
        if (cur < prev) {
            stack.push(prev);
            res.push(prev);
        }
        else {
            while (stack.length) {
                let top = stack[stack.length - 1];
                if (top > cur) {
                    res.push(top);
                    break;
                }
                else stack.pop();
            }
            if (!stack.length) res.push(-1);
        }
    }
    return res.reverse().join(' ');
}

console.log(solution(+len, nums.split(' ')));