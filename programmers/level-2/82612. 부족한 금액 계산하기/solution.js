/**
 * https://programmers.co.kr/learn/courses/30/lessons/82612
 * @param {number} price 
 * @param {number} money 
 * @param {number} count 
 * @returns 
 */
function solution(price, money, count) {
    let total = 0;
    for (let i = 1; i <= count; i += 1) {
        total += price * i;
    }
    return total - money > 0 ? total - money : 0;
}

console.log(solution(1, 1, 1))