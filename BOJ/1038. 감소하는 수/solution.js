const n = +require('fs').readFileSync('/dev/stdin').toString();
function solution(n) {
    if (n <= 10) return n;

    const q = [], nums = [];
    let idx = 10;

    for (let i = 0; i < 10; i += 1) {
        q[i] = i;
        nums[i] = i;
    }

    while (q.length) {
        const num = q.shift();
        const last = num % 10;
        for (let i = 0; i < last; i += 1) {
            q.push(num * 10 + i);
            nums[idx++] = num * 10 + i;
        }
    }
    return n < idx ? nums[n] : -1;
}

console.log(solution(n));