// https://leetcode.com/problems/generate-parentheses/
/**
 * @param {number} n
 * @return {string[]}
 */
function generateParenthesis(n) {
    const parens = [];
    const genParens = (open, close, len, str) => {
        if (str.length === len * 2) {
            parens.push(str);
            return;
        }

        if (open < len) genParens(open + 1, close, len, str + '(');
        if (close < open) genParens(open, close + 1, len, str + ')');
    };

    genParens(0, 0, n, '');
    return parens;
};

console.log(generateParenthesis(3));