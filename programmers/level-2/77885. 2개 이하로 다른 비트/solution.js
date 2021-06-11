// https://programmers.co.kr/learn/courses/30/lessons/77885
/**
 * 
 * @param {BigInt[]} numbers 
 * @returns 
 */
function solution(numbers) {
    return numbers.map(n => {
        const res = fn(BigInt(n)).toString();
        return parseInt(res.substring(0, res.length));
    });
}

function fn(n) {
    if (BigInt(n) % 2n === 0n) return BigInt(n + 1n);
    const zero = BigInt(~n) & BigInt(n + 1n);
    return BigInt((BigInt(n) | zero) & ~(zero >> 1n));
}

console.log(solution([2, 7, 999999999999999]))
