const input = require('fs').readFileSync('/dev/stdin').toString();
let stars = '';
for (let i = 0; i < input; i += 1) {
    stars += '*';
    console.log(stars);
}
