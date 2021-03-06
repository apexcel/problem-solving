/**
 * @param {number[][]} matrix
 * @return {void} Do not return anything, modify matrix in-place instead.
 */
function rotate(matrix) {   
    const size = matrix.length;
    for (let i = 0; i < size; i += 1) {
        for (let j = i + 1; j < size; j += 1) {
            [matrix[i][j], matrix[j][i]] = [matrix[j][i], matrix[i][j]];
        }
    }
    for (const m of matrix) m.reverse();
};