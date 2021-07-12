// https://programmers.co.kr/learn/courses/30/lessons/81301
/**
 * 
 * @param {string} s 
 * @returns {number}
 */
function solution(s) {
    const table = {
        'zero': 0,
        'one': 1,
        'two': 2,
        'three': 3,
        'four': 4,
        'five': 5,
        'six': 6,
        'seven': 7,
        'eight': 8,
        'nine': 9,
    };

    let str = '', ans = '';
    for (let i = 0; i < s.length; i += 1) {
        if (isNaN(s[i])) {
            str += s[i];
            if (table[str] !== undefined) {
                console.log('yes', table[str])
                ans += table[str];
                str = '';
            }
        }
        else {
            ans += s[i];
        }
    }
    return parseInt(ans, 10);
}

solution("1zerotwozero3")