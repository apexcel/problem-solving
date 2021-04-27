const input = require('fs').readFileSync('/dev/stdin').toString();
let ans = '';
for (let i = 1; i <= input; i += 1) {
    if (i == input) {
        ans += i;
    }
    else {
        ans += i + '\n';
    }
}
console.log(ans);