const [n, ...data] = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');
const coords = data.map(d => d.split(' ').map(Number));

const mat = Array.from(Array(1001), () => Array(1001).fill(0));
for (let i = 0; i < coords.length; i += 1) {
    const [bx, by, w, h] = coords[i];

    for (let y = by; y < by + h; y += 1) {
        for (let x = bx; x < bx + w; x += 1) {
            mat[y][x] = i + 1;
        }
    }
}

const sizes = Array(coords.length + 1).fill(0);
for (let y = 0; y < mat.length; y += 1) {
    for (let x = 0; x < mat.length; x += 1) {
        if (mat[y][x]) {
            sizes[mat[y][x]] += 1;
        }
    }
}

console.log(sizes.slice(1).join('\n'));