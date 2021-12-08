const n = +require('fs').readFileSync('/dev/stdin').toString();
const res = [], q = [];

for (let i = 0; i <= 9; i += 1) {
    res[i] = i;
    q[i] = i;
}

while (q.length) {
    const front = q.shift();

    for (let i = 0; i < front % 10; i += 1) {
        const n = (front * 10) + i;
        q.push(n);
        res.push(n);
    }
}
console.log(n - 1 >= res.length ? -1 : res[n - 1]);