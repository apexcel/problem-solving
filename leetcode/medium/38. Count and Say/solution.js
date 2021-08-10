/** https://leetcode.com/problems/count-and-say/
 * @param {number} n
 * @return {string}
 */
function countAndSay(n) {
    if (n === 1) return '1';

    let str = '1';
    for (let i = 1; i < n; i += 1) {
        let count = 1, buffer = '';

        for (let j = 1; j <= str.length; j += 1) {
            const prev = str[j-1], curr = str[j];
            if (prev === curr) {
                count += 1;
            }
            else {
                buffer += count + prev;
                count = 1;
            }
        }
        str = buffer;
    }
    return str;
};