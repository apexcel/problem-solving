const n = +require('fs').readFileSync('/dev/stdin').toString();
const gcd = (a, b) => a % b ? gcd(b, a % b) : b;
const lcm = (a, b) => a * b / gcd(a, b);
const getVal = n => {
    let rem, val = 1;
    while (n > 0) {
        rem = n % 10;
        n = Math.floor(n / 10);
        if (rem) val = lcm(val, rem);
    }
    return val;
};

function solution(x) {
    const val = getVal(x);
    if (!val || x % val === 0) return x;
    
    let exp = 10;
    while (x % val) {
        x *= 10;
        for (let i = 0, res; i < exp; i += 1) {
            res = x + i
            if (res % val === 0) return res;
        }
        exp *= 10;
    }
}

console.log(solution(n));