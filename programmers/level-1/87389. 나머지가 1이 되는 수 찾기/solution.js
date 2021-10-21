/**
 * @param {number} n 
 */
function solution(n) {
    return factorization(n - 1);
}

function factorization(n) {
    if (n < 2) return n;
    for (let i = 2; i <= n; i += 1) {
        while (n % i === 0 && n > 0) {
            n = Math.floor(n / i);
            return i;
        }
    }
}