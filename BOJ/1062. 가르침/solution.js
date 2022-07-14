const [info, ...data] = require('fs').readFileSync('./data.in').toString().trim().split('\n');
const [n, k] = info.split(' ').map(Number);

if (k < 5) {
    console.log(0);
    process.exit();
}

if (k === 26) {
    console.log(n);
    process.exit();
}

const bitmask = (str) => {
    let bits = 0;
    for (const char of str) {
        const pos = char.charCodeAt(0) - 97;
        bits |= (1 << pos);
    }
    return bits;
}

const bitmasked = data.map(bitmask);
let alphabets = 532741, mx = 0, cnt = 0;

const backtrack = (depth, begin, limit) => {
    if (depth === limit) {
        for (const bits of bitmasked) {
            if ((bits & alphabets) === bits) cnt += 1;
        }
        mx = mx < cnt ? cnt : mx;
        cnt = 0;
        return;
    }

    for (let i = begin; i < 26; i += 1) {
        if ((alphabets & (1 << i)) === 0) {
            alphabets ^= (1 << i);
            backtrack(depth + 1, i + 1, limit);
            alphabets ^= (1 << i);
        }
    }
}

backtrack(0, 0, k - 5);
console.log(mx);