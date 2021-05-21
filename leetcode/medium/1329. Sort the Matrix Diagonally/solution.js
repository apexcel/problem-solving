// https://leetcode.com/problems/sort-the-matrix-diagonally/
/**
 * @param {number[][]} mat
 * @return {number[][]}
 */
// function diagonalSort(mat) {
//     const rows = mat.length;
//     const cols = mat[0].length;
//     const res = Array.from(Array(rows), () => Array(cols));

//     for (let i = 0; i < rows; i += 1) {
//         let temp = [];
//         for (let row = i, col = 0; row < rows && col < cols; row += 1, col += 1) {
//             temp.push(mat[row][col]);
//         }
//         temp.sort((a, b) => a - b);

//         for (let row = i, col = 0, j = 0; row < rows && col < cols; row += 1, col += 1, j += 1) {
//             res[row][col] = temp[j];
//         }
//     }

//     for (let i = 1; i < cols; i += 1) {
//         let temp = [];
//         for (let row = 0, col = i; row < rows && col < cols; row += 1, col += 1) {
//             temp.push(mat[row][col]);
//         }
//         temp.sort((a, b) => a - b);
//         for (let row = 0, col = i, j = 0; row < rows && col < cols; row += 1, col += 1, j += 1) {
//             res[row][col] = temp[j];
//         }
//     }

//     console.log(res)
// };

function diagonalSort(mat) {
    const map = new Map();

    for (let row = 0; row < mat.length; row += 1) {
        for (let col = 0; col < mat[0].length; col += 1) {
            const key = row - col;
            map.has(key) ? map.set(key, [...map.get(key), mat[row][col]]) : map.set(key, [mat[row][col]]);
        }
    }

    for (const [key, val] of map) {
        val.sort((a, b) => a - b).reverse();
    }

    for (let row = 0; row < mat.length; row += 1) {
        for (let col = 0; col < mat[0].length; col += 1) {
            const key = row - col;
            mat[row][col] = map.get(key).pop();
        }
    }

    console.log(mat)
    return mat;
}

diagonalSort([[3, 3, 1, 1], [2, 2, 1, 2], [1, 1, 1, 2]])