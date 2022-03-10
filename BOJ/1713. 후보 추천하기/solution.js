const [s, t, data] = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');
const size = +s;
const candidates = data.split(' ').map(Number);
const q = [];

const searchQueue = (replace) => {
    let [minCandidate, minRefCount] = q[0];
    let idx = 0;

    for (let i = 1; i < q.length; i += 1) {
        let [candidate, refCount] = q[i];
        if (refCount < minRefCount) {
            minCandidate = candidate;
            minRefCount = refCount;
            idx = i;
        }
    }

    q.splice(idx, 1);
    q.push(replace);
}

for (let c of candidates) {
    const idx = q.findIndex(cache => cache[0] === c);
    if (idx > -1) {
        q[idx][1] += 1;
        continue;
    }
    q.length >= size ? searchQueue([c, 1]) : q.push([c, 1]);
}

console.log(q.map(([v, _]) => v).sort((a, b) => a - b).join(' '));