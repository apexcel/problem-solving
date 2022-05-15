const [info, ...data] = require('fs').readFileSync('./data.in').toString().trim().split('\n');
const [n, m] = info.split(' ').map(Number);
const shops = [], houses = [];
const { abs, min } = Math, INF = 987654321;

data.forEach((d, y) => d.split(' ').forEach((v, x) => {
    if (v === '2') shops.push([x, y]);
    if (v === '1') houses.push([x, y]);
}));

const calc = (picked) => {
    let sum = 0, tmp;
    for (let [ex, ey] of houses) {
        tmp = INF;
        for (let [bx, by] of picked) {
            tmp = min(tmp, abs(bx - ex) + abs(by - ey));
        }
        sum += tmp;
    }
    return sum;
}

const picked = [];
let dist = INF;
const pick = (depth, begin) => {
    if (depth === m) {
        dist = min(dist, calc(picked));
        return;
    }

    for (let i = begin; i < shops.length; i += 1) {
        picked.push(shops[i]);
        pick(depth + 1, i + 1);
        picked.pop();
    }
}

pick(0, 0);
console.log(dist);