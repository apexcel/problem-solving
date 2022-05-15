class DisjointSet {
    constructor() {
        this.set = [];
        this.rank = [];
        this.size = 0;
    }

    makeSet(n) {
        for (let i = 0; i <= n; i += 1) {
            this.set[i] = i;
            this.rank[i] = 0;
        }
        this.size = this.rank.length;
    }

    union(u, v) {
        u = this.find(u), v = this.find(v);
        if (this.rank[u] > this.rank[v]) {
            this.set[v] = u;
        }
        else {
            this.set[u] = v;
            if (this.rank[u] === this.rank[v]) {
                this.rank[v] += 1;
            }
        }
    }

    find(u) {
        if (u === this.set[u]) return u;
        return this.set[u] = this.find(this.set[u]);
    }
}

const rl = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
});

const data = [];

const solution = () => {
    const [n, m] = data.shift().split(' ');
    const ds = new DisjointSet();
    ds.makeSet(n);
    
    let res = '';
    for (let op of data) {
        const [o, a, b] = op.split(' ').map(Number);
        if (!o) {
            ds.union(a, b)
        }
        else if (ds.find(a) === ds.find(b)) {
            res += 'YES\n';
        }
        else res += 'NO\n';
    }
    console.log(res);
};

rl.on('line', line => {
    data.push(line);
}).on('close', () => {
    solution();
});