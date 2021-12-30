const n = +require('fs').readFileSync('/dev/stdin').toString();
let stars = '';
for (let i = n; i > 0; i -= 1) {
    for (let j = i; j > 0; j -= 1) {
        stars += '*';
    }
    stars += '\n';
}
console.log(stars);