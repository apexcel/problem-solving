/** https://leetcode.com/problems/spiral-matrix/
 * @param {number[][]} matrix
 * @return {number[]}
 */
function spiralOrder(matrix) {
    const result = [];

    let dir = 0,
        rowBegin = 0,
        colBegin = 0,
        rowEnd = matrix.length - 1,
        colEnd = matrix[0].length - 1;

    while (result.length < matrix.length * matrix[0].length) {
        if (dir === 0) {
            for (let i = colBegin; i <= colEnd; i += 1) {
                result.push(matrix[rowBegin][i]);
            }
            rowBegin += 1;
        }
        else if (dir === 1) {
            for (let i = rowBegin; i <= rowEnd; i += 1) {
                result.push(matrix[i][colEnd]);
            }
            colEnd -= 1;
        }
        else if (dir === 2) {
            for (let i = colEnd; i >= colBegin; i -= 1) {
                result.push(matrix[rowEnd][i]);
            }
            rowEnd -= 1;
        }
        else {
            for (let i = rowEnd; i >= rowBegin; i -= 1) {
                result.push(matrix[i][colBegin]);
            }
            colBegin += 1;
        }
        dir = (dir + 1) % 4;
    }
    return result;
};