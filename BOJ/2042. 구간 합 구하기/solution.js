class FenwickTree {
    constructor(size) {
        this.tree = Array(size + 1).fill(0n);
    }

    init(arr) {
        for (let i = 0; i < arr.length; i += 1) {
            this.update(i + 1, arr[i]);
        }
    }

    update(pos, val) {
        while (pos < this.tree.length) {
            this.tree[pos] += val;
            pos += (pos & -pos);
        }
    }

    sum(pos) {
        let ret = 0n;
        while (pos > 0) {
            ret += this.tree[pos];
            pos -= (pos & -pos);
        }
        return ret;
    }
}

const [info, ...data] = require('fs').readFileSync('./data.in').toString().trim().split('\n');
const [n, m, k] = info.split(' ').map(Number);
const nums = data.slice(0, n).map(BigInt);
const queries = data.slice(n).map(d => d.split(' ').map(Number));

const ft = new FenwickTree(n);
ft.init(nums);

const res = queries.reduce((acc, [a, b, c]) => {
    if (a === 1) {
        const u = BigInt(c);
        ft.update(b, u - nums[b - 1]);
        nums[b - 1] = u;
    }
    else {
        acc += (ft.sum(c) - ft.sum(b - 1)).toString() + '\n';
    }
    return acc;
}, '');

console.log(res);