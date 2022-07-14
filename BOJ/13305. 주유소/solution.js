const [n, roads, cities] = require('fs').readFileSync('./data.in').toString().trim().split('\n');
const nodes = cities.split(' ');
const edges = roads.split(' ');

let prev = BigInt(nodes[0]), sum = prev * BigInt(edges[0]);
for (let i = 1; i < edges.length; i += 1) {
    const node = BigInt(nodes[i]), edge = BigInt(edges[i]);
    if (node < prev) prev = node;
    sum += edge * prev;
}

console.log(sum.toString());
