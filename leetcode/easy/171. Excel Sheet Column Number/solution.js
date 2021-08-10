/** https://leetcode.com/problems/excel-sheet-column-number/
 * @param {string} columnTitle
 * @return {number}
 */
function titleToNumber(columnTitle) {
    return columnTitle.split('').reverse().reduce((sum, alpha, i) => sum += (26 ** i) * (alpha.charCodeAt(0) - 64), 0);
    // let sum = 0;
    // for (let i = columnTitle.length - 1, j = 0; i >= 0; i -= 1, j += 1) {
    //     sum += (26 ** j) * (columnTitle[i].charCodeAt(0) - 64);
    // }
    // return sum;
};
/** 
 * 26진수라 생각하고 풀이
 * A -> 1
 * B -> 2
 * C -> 3
 * ...
 * Z -> 26
 * AA -> 27 = 26^1 * 1 + 26^0 * 1
 * AB -> 28 = 26^1 * 1 + 26^0 * 2
 * ...
 * ZY -> 26^1 * 26 + 26^0 * 25
 */