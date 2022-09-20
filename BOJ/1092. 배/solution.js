// const [n, a, m, b] = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');
const [n, a, m, b] = require('fs').readFileSync('./data.in').toString().trim().split('\n');
const crains = a.split(' ').map(Number).sort((a, b) => b - a);
const cargos = b.split(' ').map(Number).sort((a, b) => b - a);
let left = +m, cnt = 0;

if (cargos[0] > crains[0]) {
    console.log(-1);
    process.exit();
}

while (left) {
    for (let i = 0; i < crains.length; i += 1) {
        for (let j = 0; j < cargos.length; j += 1) {
            if (cargos[j] === -1) continue;
            if (cargos[j] <= crains[i]) {
                cargos[j] = -1;
                left -= 1;
                break;
            }
        }
    }
    cnt += 1;
}

console.log(cnt);