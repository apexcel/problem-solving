let t = +require('fs').readFileSync('/dev/stdin').toString();
const ticks = [300, 60, 10];
const btn = [0, 0, 0];

for (let i = 0; i < 3; i += 1) {
    btn[i] = Math.floor(t / ticks[i]);
    t %= ticks[i];
}

console.log(t !== 0 ? -1 : btn.join(' '));