const sc = Number(require('fs').readFileSync('/dev/stdin').toString());
let cache = Array(1000001).fill(0);

for (let i = 2; i <= sc; i += 1) {
    cache[i] = cache[i - 1] + 1;
    if (!(i % 3)) {
        cache[i] = Math.min(cache[i], cache[i / 3] + 1);
    }
    if (!(i % 2)) {
        cache[i] = Math.min(cache[i], cache[i / 2] + 1);
    }
}

console.log(cache[sc])
