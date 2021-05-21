// https://leetcode.com/problems/replace-all-digits-with-characters/
/**
 * @param {string} s
 * @return {string}
 */
function replaceDigits(s) {
    let res = '';
    for (let i = 0; i < s.length; i += 2) {
        const char = s[i], num = parseInt(s[i+1], 10);
        // res += num ? ...
        // 이런식으로 작성하면 num이 0 일 경우 false 처리가 된다.
        // 따라서 type 체크를 바르게 하도록 해야한다.
        res += !isNaN(num) ? char + String.fromCharCode(char.charCodeAt(0) + num) : char;
    }
    console.log(res);
    return res;
};

replaceDigits('v0g6s4d');