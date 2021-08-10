/**
 * https://programmers.co.kr/learn/courses/30/lessons/83201
 * @param {number[][]} scores 
 * @returns {string}
 */
function solution(scores) {
    const size = scores.length;
    const table = 'FFFFFDDCBAA';
    let res = '';

    for (let col = 0; col < size; col += 1) {
        let sum = 0, divisor = size, minCount = 0, maxCount = 0;

        for (let row = 0; row < size; row += 1) {
            if (scores[row][col] < scores[col][col]) minCount += 1;
            if (scores[row][col] > scores[col][col]) maxCount += 1;
            sum += scores[row][col];
        }

        if (minCount === size - 1 || maxCount === size - 1) {
            sum -= scores[col][col];
            divisor = size - 1;
        }

        res += table[Math.floor(sum / divisor / 10)];
    }
    return res;
}