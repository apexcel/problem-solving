const sc = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');
const cities = parseInt(sc[0], 10);
const [edges, nodes] = sc.slice(1).map(v => v.split(' ').map(e => parseInt(e, 10)))

// 처음 풀이
// const solution = (cities, edges, nodes) => {
//     let refuel = [
//         [0, BigInt(nodes[0]), 0n],
//     ];
//     let cost = 0n;
//     for (let i = 0; i < cities - 1; i += 1) {
//         if (nodes[i] < refuel[refuel.length - 1][1]) {
//             refuel.push([i, BigInt(nodes[i]), cost]);
//             cost = 0n;
//         }
//         cost += BigInt(edges[i]);
//     }

//     let total = 0n;
//     for (let i = 1; i < refuel.length; i += 1) {
//         total += refuel[i-1][1] * refuel[i][2];
//     }

//     total += refuel[refuel.length - 1][1] * cost;
//     total = total.toString();
//     console.log(total.substring(0, total.length))
//     // console.log(refuel)
// };

// 두 번째 풀이
const solution = (cities, edges, nodes) => {
    let min = BigInt(nodes[0]);
    let cost = 0n;
    for (let i = 0; i < cities - 1; i += 1) {
        if (nodes[i] < min) {
            min = BigInt(nodes[i]);
        }
        cost += min * BigInt(edges[i]);
    }
    console.log(`${cost}`)
};