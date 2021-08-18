/**
 * https://programmers.co.kr/learn/courses/30/lessons/81302
 * @param {string[]} places 
 * @returns {bool}
 */
function solution(places) {
    return places.map(place => Number(getPosition(place).map(pos => bfs(place, pos)).every(ret => ret !== 0)));
}

function getPosition(place) {
    return place.flatMap((row, y) => Array.from(row).reduce((acc, cur, x) => cur === 'P' ? [...acc, [x, y]] : acc, []));
}

/**
 * @param {string[]} place 
 */
function bfs(place, initPos) {
    const q = [initPos];
    const isVisited = Array.from(Array(5), () => Array(5).fill(0));
    const dir = [
        [0, -1],
        [1, 0],
        [0, 1],
        [-1, 0],
    ];

    while (q.length > 0) {
        const [cx, cy] = q.shift();
        isVisited[cy][cx] = 1;

        for (let i = 0; i < dir.length; i += 1) {
            const x = cx + dir[i][0], y = cy + dir[i][1];
            const dist = Math.abs(initPos[0] - x) + Math.abs(initPos[1] - y);

            if (x < 0 || y < 0 || x >= 5 || y >= 5 || dist > 2 || isVisited[y][x]) continue;

            isVisited[y][x] = 1;
            if (place[y][x] === 'P') return 0;
            else if (place[y][x] === 'X') continue;
            else q.push([x, y]);
        }
    }

    return 1;
}

console.log(solution([
    ["POOOP", "OXXOX", "OPXPX", "OOXOX", "POXXP"],
    ["POOPX", "OXPXP", "PXXXO", "OXXXO", "OOOPP"],
    ["PXOPX", "OXOXP", "OXPOX", "OXXOP", "PXPOX"],
    ["OOOXX", "XOOOX", "OOOXX", "OXOOX", "OOOOO"],
    ["PXPXP", "XPXPX", "PXPXP", "XPXPX", "PXPXP"]
]))

/**
 * 행과 열 사이즈가 같은 행렬을
 * 인접행렬로 생각하여 그래프로 문제로 풀 수 있다.
 * 혹은 이중 for문을 사용하여 체크하는 방식으로 풀 수 있다.
 */