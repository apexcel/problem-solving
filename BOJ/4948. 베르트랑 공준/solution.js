const rl = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
});

const p = Array(246913).fill(1);
p[0] = p[1] = 0;
for (let i = 2; i * i < p.length; i += 1) {
    if (!p[i]) continue;
    for (let j = i + i; j < p.length; j += i) {
        p[j] = 0;
    }
}

const getCount = x => {
    let cnt = 0;
    for (let i = x + 1; i <= 2 * x; i += 1) {
        if (p[i] > 0) cnt += 1;
    }
    return cnt;
}

let res = '';
rl.on('line', line => {
    if (!(+line)) {
        console.log(res);
        process.exit();
    }
    res += getCount(+line) + '\n';
});