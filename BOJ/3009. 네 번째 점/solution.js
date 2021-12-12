const input = require('fs').readFileSync('/dev/stdin').toString().split('\n');
let px = 0, py = 0;
input.forEach(coords => {
    const [x, y] = coords.split(' ');
    px ^= +x, py ^= y;
});
console.log(px, py);