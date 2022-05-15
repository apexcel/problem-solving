const target = +require('fs').readFileSync('/dev/stdin').toString().trim();
const sticks = [64];

const sum = arr => arr.reduce((acc, cur) => acc + cur, 0);

const slice = () => {
    const len = sum(sticks);
    if (len > target) {
        const shortest = sticks.pop();
        const half = shortest >> 1;
        if (!half) return;

        len - half > target ? sticks.push(half) : sticks.push(half, half);
        slice();
    }
}
slice();
console.log(sticks.length);
