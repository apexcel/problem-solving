/**
 * @param {string} word 
 * @returns 
 */
function solution(word) {
    return word.split('').reduce((acc, cur, i) => acc + [781, 156, 31, 6, 1][i] * ['A', 'E', 'I', 'O', 'U'].indexOf(cur) + 1, 0);
}

console.log(solution('E'))