/**
 * https://programmers.co.kr/learn/courses/30/lessons/12943
 * @param {number} n 
 */
function solution(n) {
    let cnt = 0;
    while (n > 1) {
        if (cnt > 500) return -1;
        n = n % 2 ? (n * 3) + 1 : n / 2;
        cnt += 1;
    }
    return cnt;
}