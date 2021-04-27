const scan = require('fs').readFileSync('/dev/stdin').toString().split('\n').filter(el => Boolean(el)).map(el => parseInt(el, 10));
let cache = [0, 1, 1];
const fib = (n) => {
    if (n === 0) return 0;
    if (n === 1 || n === 2) return 1;
    if (n > 2 && cache[n]) return cache[n];
    else {
        return cache[n] = fib(n-1) + fib(n-2);
    }
}

fib(41);
for (let i = 1; i <= scan[0]; i++) {
    const z = cache[scan[i]-1], o = cache[scan[i]];
    scan[i] === 0 ? console.log("1 0") : console.log(z, o);
}

// fib(n) 일때 0의 호출 횟수와 1의 호출 횟수를 도표로 그려서 계산하면
// 각 호출 횟수도 피보나치 수열을 이루는 것을 알 수가 있다.