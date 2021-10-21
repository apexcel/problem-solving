const input = parseInt(require('fs').readFileSync('/dev/stdin').toString(), 10);
let str = '';
for (let i = 1; i <= input; i += 1) {
    str += i + '\n';
}
console.log(str);