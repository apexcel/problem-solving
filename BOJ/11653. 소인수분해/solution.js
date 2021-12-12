let n = +require('fs').readFileSync('/dev/stdin').toString();
let i = 2, res = '';
while (n > 1) {
    if (n % i === 0) {
        n = Math.floor(n / i);
        res += i + '\n';
    }
    else i += 1;
}
console.log(res);