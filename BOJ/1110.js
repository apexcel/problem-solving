const input = require('fs').readFileSync('/dev/stdin').toString().trim();
let ans = input;
let counter = 0;
let last = '';
let first = '';

while (true) {
    counter += 1;
    if (ans.length === 1) ans = '0' + ans;

    first = ans[1];
    last = (Number(ans[0]) + Number(ans[1])).toString();
    if (last.length > 1) {
        last = last[1];
    }
    ans = first + last;
    if (Number(input) === Number(ans)) break;
}
console.log(counter);