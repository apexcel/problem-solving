const data = require('fs').readFileSync('./data.in').toString().trim();
const SIZE = data.length;
const set = new Set();
let sliceLength = 1;

while (sliceLength <= SIZE) {
    for (let i = 0; i < data.length; i += 1) {
        set.add(data.substring(i, i + sliceLength));
    }
    sliceLength += 1;
}

console.log(set.size);