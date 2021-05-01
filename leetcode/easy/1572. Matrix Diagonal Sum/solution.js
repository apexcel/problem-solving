// https://leetcode.com/problems/matrix-diagonal-sum/
/**
 * @param {number[][]} mat
 * @return {number}
 */
function diagonalSum(mat) {
    const size = mat.length, overlap = Math.floor(size/2);
    let sum = 0;
    for (let i = 0; i < size; i += 1) {
        sum += mat[i][i] + mat[i][size - i - 1];
    }
    return size % 2 !== 0 ? sum - mat[overlap][overlap] : sum;
};


console.log(diagonalSum([
    [1,2,3],
    [4,5,6],
    [7,8,9],
]))