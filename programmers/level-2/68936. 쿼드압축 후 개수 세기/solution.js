// https://programmers.co.kr/learn/courses/30/lessons/68936
/**
 * 
 * @param {number[]} arr 
 */
function solution(arr) {
    const counter = [0, 0];
    quadCompress(arr, arr.length, 0, 0, counter);
    return counter;
}

/**
 * 
 * @param {number[]} arr 
 * @param {number} size 
 * @param {number} row 
 * @param {number} col 
 * @param {number} counter 
 * @returns 
 */
function quadCompress(arr, size, row, col, counter) {
    let flag = 0;
    for (let y = row; y < row + size; y += 1) {
        for (let x = col; x < col + size; x += 1) {
            if (arr[y][x] === 1) flag += 1;
        }
    }

    if (flag === 0) {
        counter[0] += 1;
        return;
    }
    if (flag === size * size) {
        counter[1] += 1;
        return;
    }

    quadCompress(arr, size / 2, row, col, counter);
    quadCompress(arr, size / 2, row, col + size / 2, counter);
    quadCompress(arr, size / 2, row + size / 2, col, counter);
    quadCompress(arr, size / 2, row + size / 2, col + size / 2, counter);
}

solution([[1, 1, 0, 0], [1, 0, 0, 0], [1, 0, 0, 1], [1, 1, 1, 1]])
solution([[1, 1, 1, 1, 1, 1, 1, 1], [0, 1, 1, 1, 1, 1, 1, 1], [0, 0, 0, 0, 1, 1, 1, 1], [0, 1, 0, 0, 1, 1, 1, 1], [0, 0, 0, 0, 0, 0, 1, 1], [0, 0, 0, 0, 0, 0, 0, 1], [0, 0, 0, 0, 1, 0, 0, 1], [0, 0, 0, 0, 1, 1, 1, 1]])