// https://programmers.co.kr/learn/courses/30/lessons/77884

/**
 * 
 * @param {number} left 
 * @param {number} right 
 * @returns {number}
 */
function solution(left, right) {
    let res = 0;
    for (let i = left; i <= right; i += 1) {
        res += !(divisor(i).length % 2) ? i : -i;
    }
    return res;
}

function divisor(n) {
    const d = [];
    for (let i = 1; i * i <= n; i += 1) {
        if (n % i === 0) {
            d.push(i);
            if (i !== n/i) d.push(n/i);
        }
    }
    return d;
}

// Better way
// 제곱수의 약수의 개수는 홀수이고, 제곱수가 아닌 경우는 짝수이다.

function sol(left, right) {
    let res = 0;
    for (let i = left; i <= right; i += 1) {
        res += Number.isInteger(Math.sqrt(i)) ? -i : i;
    }
    return res;
}

