/**
 * https://programmers.co.kr/learn/courses/30/lessons/12947
 * @param {number} x 
 * @returns {boolean}
 */
const solution = x => {
    let s = 0, k = x;
    for (let i = 0; k > 0; i++) {
        s += k % 10;
        k = Math.floor(k / 10);
    }
    return x % s === 0;
};