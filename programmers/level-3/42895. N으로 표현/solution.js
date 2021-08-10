/**
 * https://programmers.co.kr/learn/courses/30/lessons/42895
 * @param {number} N 
 * @param {number} number 
 * @returns {number}
 */
function solution(N, number) {
    let count = -1;
    let list = [new Set()];

    for (let i = 1; i <= 8; i += 1) {
        const straight = parseInt(new Array(i).fill(N).join(''), 10);
        list.push(new Set([straight]));

        for (let j = 1; j <= i; j += 1) {
            for (const a of [...list[j]]) {
                for (const b of [...list[i - j]]) {
                    list[i].add(a + b);
                    list[i].add(a - b);
                    list[i].add(a * b);
                    if (b > 0) {
                        list[i].add(a / b);
                    }
                }
            }
        }

        if (list[i].has(number)) {
            return i;
        }
    }
    return count;
}