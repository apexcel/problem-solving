const n = +require('fs').readFileSync('/dev/stdin').toString();
let min = 987654321;
for (let num = n; num > 0; num -= 1) {
    let m = num, sum = num;
    while (m > 0) {
        sum += m % 10;
        m = Math.floor(m / 10);
    }
    if (sum === n && num < min) min = num;
}
console.log(min === 987654321 ? 0 : min);