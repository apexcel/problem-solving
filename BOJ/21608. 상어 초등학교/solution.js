const [n, ...data] = require('fs').readFileSync('./data.in').toString().trim().split('\n');
const k = +n;
const students = data.map(d => d.split(' ').map(Number));
const mat = Array.from(Array(k), () => Array(k).fill(0));
const chk = Array.from(Array(k), () => Array(k).fill(0));

const dir = [
    [0, -1],
    [1, 0],
    [0, 1],
    [-1, 0],
];

const isValidPosition = (x, y) => y >= 0 && x >= 0 && y < k && x < k;

const iterate = (x, y) => (callback, ...conditions) => {
    for (let [dx, dy] of dir) {
        const nx = x + dx, ny = y + dy;
        const isPass = conditions.every(condition => condition(nx, ny));
        if (isPass) callback(nx, ny);
    }
}

chk.map((row, y) => row.map((v, x) => iterate(x, y)((nx, ny) => chk[ny][nx] += 1, isValidPosition)));

const getCoords = (friends) => {
    let maxFriends = -1, coords = [];
    for (let y = 0; y < k; y += 1) {
        for (let x = 0; x < k; x += 1) {
            if (mat[y][x]) continue;

            let friendsExist = 0;
            const next = iterate(x, y);
            next(() => friendsExist += 1, isValidPosition, (nx, ny) => friends.includes(mat[ny][nx]));

            if (maxFriends <= friendsExist) {
                if (maxFriends < friendsExist) {
                    coords = [x, y];
                    maxFriends = friendsExist;
                    continue;
                }
                coords = chk[y][x] > chk[coords[1]][coords[0]] ? [x, y] : coords;
            }
        }
    }
    return coords;
}

const pos = [];
for (let [idx, ...friends] of students) {
    const [x, y] = getCoords(friends);
    chk[y][x] = -1;
    mat[y][x] = idx;
    iterate(x, y)((nx, ny) => chk[ny][nx] -= 1, isValidPosition);
    pos.push([x, y]);
}

let res = 0;
for (let i = 0; i < students.length; i += 1) {
    const [idx, ...friends] = students[i];
    const [x, y] = pos[i];
    let cnt = 0;
    iterate(x, y)(() => cnt += 1, isValidPosition, (nx, ny) => friends.includes(mat[ny][nx]));
    if (cnt > 0) res += 10 ** (cnt - 1);
}
console.log(res);

