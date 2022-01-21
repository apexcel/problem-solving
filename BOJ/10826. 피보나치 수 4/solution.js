const n = +require('fs').readFileSync('/dev/stdin').toString();
const dp = ['0', '1'];
const sum = (a, b) => {
    let lenA = a.length, lenB = b.length;
    let numA, numB, carry = 0, idx = 0;
    let res = [];

    while (lenA || lenB || carry) {
        if (lenA) {
            numA = +a[lenA - 1];
            lenA -= 1;
        }
        if (lenB) {
            numB = +b[lenB - 1];
            lenB -= 1;
        }
        res[idx] = (numA + numB + carry) % 10;
        carry = (numA + numB + carry) > 9 ? 1 : 0;
        numA = numB = 0;
        idx += 1;
    }

    return res.reverse().join('');
}

for (let i = 2; i <= n; i += 1) {
    dp[i] = sum(dp[i - 2], dp[i -1]);
}
console.log(dp[n]);