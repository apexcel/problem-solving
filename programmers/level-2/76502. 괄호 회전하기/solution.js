// https://programmers.co.kr/learn/courses/30/lessons/76502
/**
 * 
 * @param {string} s 
 * @returns {number}
 */
function solution(s) {
    let cnt = 0;
    for (let i = 0; i < s.length; i += 1) {
        if (isCorrect(s)) cnt += 1;
        s = s.substring(1) + s.substring(0, 1);
    }
    return cnt;
}

/**
 * 
 * @param {string} parentheses 
 */
function isCorrect(parentheses) {
    const stack = [];
    for (let i = 0; i < parentheses.length; i += 1) {
        const p = parentheses[i], top = stack[stack.length - 1];
        if (p === '[' || p === '{' || p === '(') stack.push(p);
        else {
            if (p === ']' && top === '[' || p === '}' && top === '{' || p === ')' && top === '(') stack.pop();
            else return false;
        }
    }
    return stack.length > 0 ? false : true;
}

solution('[](){}')