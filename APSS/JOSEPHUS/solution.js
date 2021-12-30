const solution = (n, k) => {
    const q = Array(n).fill(0).map((_, i) => i + 1);
    let cnt = k;
    while(q.length > 2) {
        const cur = q.shift();
        cnt === k ? cnt = 0 : q.push(cur);
        cnt += 1;
    }
    return q.sort((a, b) => a - b);
};

console.log(solution(6, 3))
console.log(solution(40, 3))