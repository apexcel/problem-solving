const [n, ...data] = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n')
const h = Array(1001).fill(0);

data.forEach(d => {
    const [pos, height] = d.split(' ').map(Number);
    h[pos] = height;
});

let area = 0;
let leftHeight = 0, leftIdx = 0;
let rightHeight = 0, rightIdx = 0;

for (let i = 0; i < h.length; i += 1) {
    if (h[i] >= leftHeight) {
        area += leftHeight * (i - leftIdx);
        leftHeight = h[i];
        leftIdx = i;
    }
}

for (let j = h.length - 1; j >= leftIdx; j -= 1) {
    if (h[j] >= rightHeight) {
        area += rightHeight * (rightIdx - j);
        rightHeight = h[j];
        rightIdx = j;
    }
}
area += rightHeight;
console.log(area);