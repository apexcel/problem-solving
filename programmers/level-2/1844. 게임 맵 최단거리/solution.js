// https://programmers.co.kr/learn/courses/30/lessons/1844
/**
 * @param {number[][]} maps 
 * @returns {number}
 */
function solution(maps) {
    const height = maps.length
        , width = maps[0].length
        , isVisited = maps.slice(0);

    const dir = [
        [0, 1], // down
        [1, 0], // right
        [0, -1], // up
        [-1, 0], // left
    ];
    const q = [[0, 0, 1]];

    while (q.length > 0) {
        const [x, y, depth] = q.shift();

        if (y === height - 1 && x === width - 1) {
            return depth;
        }

        for (let i = 0; i < dir.length; i += 1) {
            const [dx, dy] = dir[i];
            if (y + dy >= 0 && x + dx >= 0 && y + dy < height && x + dx < width && isVisited[y + dy][x + dx] === 1) {
                isVisited[y + dy][x + dx] = 0;
                q.push([x + dx, y + dy, depth + 1]);
            }
        }
    }

    return -1;
}

solution([[1, 0, 1, 1, 1], [1, 0, 1, 0, 1], [1, 0, 1, 1, 1], [1, 1, 1, 0, 1], [0, 0, 0, 0, 1]]);
solution([[1, 0, 1, 1, 1], [1, 0, 1, 0, 1], [1, 0, 1, 1, 1], [1, 1, 1, 0, 0], [0, 0, 0, 0, 1]]);