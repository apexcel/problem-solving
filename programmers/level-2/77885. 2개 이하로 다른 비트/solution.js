// https://programmers.co.kr/learn/courses/30/lessons/77885
/**
 * 
 * @param {BigInt[]} numbers 
 * @returns 
 */
function solution(numbers) {
    return numbers.map(n => {
        const res = fn(n).toString();
        return parseInt(res, 10);
    });
}

function fn(n) {
    if (n % 2 === 0) return BigInt(n + 1);
    const zero = ~n & (n + 1);
    return BigInt((n | zero) & ~(zero >> 1));
}

console.log(solution([5,6,7,8,9,10,11]))

/* 일반적인 방법
function solution(numbers) {
    return numbers.map(n => fn(n));
}

function fn(n) {
    if (n % 2 === 0) return n + 1;
    const bit = n.toString(2).split('');
    let pos = 0;
    for (pos = bit.length; pos > 0; pos -= 1) {
        if (bit[pos] === '0') {
            break;
        }
    }
    pos ? bit[pos] = '1' : bit.unshift('1');
    bit[pos+1] = '0';

    return parseInt(bit.join(''), 2);
}
*/