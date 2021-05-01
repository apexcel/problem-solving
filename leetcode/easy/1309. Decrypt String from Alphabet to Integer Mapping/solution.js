// https://leetcode.com/problems/decrypt-string-from-alphabet-to-integer-mapping/
/**
 * @param {string} s
 * @return {string}
 */
function freqAlphabets(s) {
    let output = '';
    for (let i = 0; i < s.length; i += 1) {
        let code = 96;
        if (s[i + 2] === '#') {
            code += (10 * s[i] + 1 * s[i + 1]);
            i += 2;
        }
        else {
            code += parseInt(s[i], 10);
        }
        output += String.fromCharCode(code);
    }
    return output;
};