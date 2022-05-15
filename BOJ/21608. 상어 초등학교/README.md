---
문제번호: 21608
문제이름: '상어 초등학교'
주소: 'https://www.acmicpc.net/problem/21608'
분류: ['구현']
---

# 풀이

```js
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

const getCoords = (friends) => {
    let maxFriends = -1, coords = [];
    for (let y = 0; y < k; y += 1) {
        for (let x = 0; x < k; x += 1) {
            if (mat[y][x]) continue;

            let friendsExist = 0;
            for (let [dx, dy] of dir) {
                const nx = x + dx, ny = y + dy;
                if (isValidPosition(nx, ny) && friends.includes(mat[ny][nx])) {
                    friendsExist += 1;
                }
            }

            if (maxFriends <= friendsExist) {
                if (maxFriends === friendsExist) {
                    const [cx, cy] = coords;
                    if (chk[y][x] > chk[cy][cx]) coords = [x, y];
                    else if (chk[y][x] < chk[cy][cx]) coords = [cx, cy];
                    else {

                        coords = [cx, cy];
                    }
                }
                else {
                    coords = [x, y];
                }
                maxFriends = friendsExist;
            }
        }
    }
    return coords;
}

chk.map((row, y) => row.map((v, x) => {
    for (let [dx, dy] of dir) {
        const nx = x + dx, ny = y + dy;
        if (isValidPosition(nx, ny)) chk[ny][nx] += 1;
    }
}))

const pos = [];
for (let [idx, ...friends] of students) {
    const [x, y] = getCoords(friends);
    chk[y][x] = -1;
    mat[y][x] = idx;
    for (let [dx, dy] of dir) {
        const nx = x + dx, ny = y + dy;
        if (isValidPosition(nx, ny)) {
            chk[ny][nx] -= 1;
        }
    }
    pos.push([x, y]);
}

let res = 0;
for (let i = 0; i < students.length; i += 1) {
    const [idx, ...friends] = students[i];
    const [x, y] = pos[i];

    let cnt = 0;
    for (let [dx, dy] of dir) {
        const nx = x + dx, ny = y + dy;
        if (isValidPosition(nx, ny) && friends.includes(mat[ny][nx])) {
            cnt += 1;
        }
    }
    if (cnt > 0) {
        res += 10 ** (cnt - 1);
    }
}
console.log(res);
```