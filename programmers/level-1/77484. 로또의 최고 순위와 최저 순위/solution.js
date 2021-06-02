// https://programmers.co.kr/learn/courses/30/lessons/77484
/**
 * 
 * @param {number[]} lottos 
 * @param {number[]} win_nums 
 * @returns {number[]}
 */
function solution(lottos, win_nums) {
    let matched = 0, zero = 0;
    for (let i = 0; i < 6; i += 1) {
        if (win_nums.includes(lottos[i])) matched += 1;
        if (lottos[i] === 0) zero += 1;
    }
    const max = 6 - (matched + zero), min = 6 - matched;
    return [max > 5 ? max : max + 1, min === 6 ? min : min + 1]
}

solution([44, 1, 0, 0, 31, 25], [31, 10, 45, 1, 6, 19]) // 3, 5
solution([0, 0, 0, 0, 0, 0], [31, 10, 45, 1, 6, 19]) // 1, 6
solution([45, 4, 35, 20, 3, 9], [20, 9, 3, 45, 4, 35]) // 1, 1
solution([1, 2, 3, 4, 5, 6], [20, 9, 10, 45, 11, 35]) // 6, 6