let n = +require('fs').readFileSync('/dev/stdin').toString();
let res = 0;
while (n > 0) {
    if (n % 5 === 0) {
        res += n / 5;
        n %= 5;
        break;
    }
    n -= 2;
    res += 1;
}
console.log(n > -1 ? res : -1);
