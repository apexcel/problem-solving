/**
 * @param {number} n 
 */
function solution(n) {
    let prev = 1, curr = 1, temp = 1;
    for (let i = 2; i <= n; i += 1) {
        temp = curr;
        curr = (curr + prev) % 1234567;
        prev = temp;
    }
    return curr;
}