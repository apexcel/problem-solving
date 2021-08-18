/** https://leetcode.com/problems/letter-combinations-of-a-phone-number/
 * @param {string} digits
 * @return {string[]}
 */
function letterCombinations(digits) {
    const table = {
        2: 'abc',
        3: 'def',
        4: 'ghi',
        5: 'jkl',
        6: 'mno',
        7: 'pqrs',
        8: 'tuv',
        9: 'wxyz',
    };

    let ret = table[digits[0]];
    if (!ret) return [];
    ret = ret.split('');

    for (let i = 1; i < digits.length; i += 1) {
        ret = stringAdder(ret, table[digits[i]].split(''));
    }

    return ret;
};

function stringAdder(arrayA, arrayB) {
    return arrayA.flatMap(valA => arrayB.map(valB => valA + valB));
}