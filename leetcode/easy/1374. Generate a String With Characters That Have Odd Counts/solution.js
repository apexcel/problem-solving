// https://leetcode.com/problems/generate-a-string-with-characters-that-have-odd-counts/
/**
 * @param {number} n
 * @return {string}
 */
function generateTheString(n) {
    let res = '';
    if (n % 2 === 0) {
        res += 'a';
        n -= 1;
    }
    while (n--) {
        res += 'b';
    }
    return res;
};