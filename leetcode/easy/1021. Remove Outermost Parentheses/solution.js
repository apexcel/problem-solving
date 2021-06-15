// https://leetcode.com/problems/remove-outermost-parentheses/
/**
 * @param {string} s
 * @return {string}
 */
function removeOuterParentheses(s) {
    let open = 0, close = 0;
    let res = '';

    for (const paren of s) {
        paren === '(' ? open++ : close++;
        if (open > 1 && open > close) {
            res += paren;
        }
        if (open === close) {
            open = close = 0;
        }
    }

    console.log(res)
    return res;
};

removeOuterParentheses(`(()())(())`)
removeOuterParentheses(`(()())(())(()(()))`)