const str = require('fs').readFileSync('/dev/stdin').toString().trim();
const half = str.length >> 1;
for (let i = 0, j = str.length - 1; i < half; i += 1, j -= 1) {
    if (str[i] !== str[j]) {
        console.log(0);
        process.exit();
    }
}
console.log(1);