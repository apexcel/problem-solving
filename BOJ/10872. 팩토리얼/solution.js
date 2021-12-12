const n = +require('fs').readFileSync('/dev/stdin').toString();
const fac = x => {
    if (x <= 1) return 1;
    return x * fac(x - 1);
};
console.log(fac(n));