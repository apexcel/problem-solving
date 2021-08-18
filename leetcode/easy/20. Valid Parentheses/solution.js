/**
 * @param {string} s
 * @return {boolean}
 */
function isValid(s) {
    const stack = [];
    const table = {
        '(': ')',
        '{': '}',
        '[': ']',
    };
    for (let i = 0; i < s.length; i += 1) {
        if (table[s[i]]) {
            stack.push(table[s[i]]);
            continue;
        }
        if (s[i] !== stack.pop()) return false;
    }
    if (stack.length > 0) return false;
    return true;
};

console.log(isValid("()"))
console.log(isValid("()["))