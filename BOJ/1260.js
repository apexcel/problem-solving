const sc = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');
const [n, m, start] = sc[0].split(' ').map(v => parseInt(v, 10));
const [vertices, edges] = sc.slice(1).reduce((acc, v) => {
    const t = v.split(' ');
    acc[0].push(parseInt(t[0], 10));
    acc[1].push(parseInt(t[1], 10));
    return acc;
}, Array.from(Array(n + 1), () => Array()));

// const solution = (V, E, S) => {
//     const map = new Map();

//     V.forEach((v, i) => {
//         if (map.get(v) instanceof Array) {
//             map.set(v, [...map.get(v), E[i]].sort())
//         }
//         else {
//             map.set(v, [E[i]])
//         }
//     })
//     E.forEach((e, i) => {
//         if (map.get(e) instanceof Array) {
//             map.set(e, [...map.get(e), V[i]].sort())
//         }
//         else {
//             map.set(e, [V[i]])
//         }
//     })

//     let isVisited = new Map();

//     map.forEach((_, k) => {
//         isVisited.set(k, false);
//     });

//     let dfsTree = [];
//     DFS(map, S, isVisited, dfsTree);
//     console.log(dfsTree.join(' '))

//     map.forEach((_, k) => {
//         isVisited.set(k, false);
//     });

//     console.log(BFS(map, S, isVisited))
// };

// const DFS = (m, start, isVisited, dfsTree) => {
//     dfsTree.push(start)
//     isVisited.set(start, true);

//     m.get(start).forEach((v, i) => {
//         if (!isVisited.get(v)) {
//             DFS(m, v, isVisited, dfsTree)
//         }
//     })

//     if (start === m.size) {
//         return;
//     }
// };

// const BFS = (m, start, isVisited) => {
//     let q = [];
//     let bfsTree = '';

//     q.push(start);

//     while (q.length) {
//         const current = q.shift();
        
//         if (!isVisited.get(current)) {
//             bfsTree += current + ' ';
//             isVisited.set(current, true)
//             m.get(current).forEach(v => q.push(v));
//         }
//     }
//     return bfsTree;
// };


const len = 1001;
let adjMat = Array.from(Array(len + 1), () => Array(len + 1).fill(0));
let isVisited = Array(len).fill(false);
let dfsTree = '';

const solution = (vertices, edges, start) => {
    edges.forEach((v, i) => {
        adjMat[vertices[i]][v] = 1
        adjMat[v][vertices[i]] = 1
    });

    DFS(start, adjMat);
    console.log(dfsTree)

    isVisited = Array(len).fill(false);
    console.log(BFS(start, adjMat));
};

const DFS = (start, mat) => {
    if (start === len+1) {
        return;
    }
    dfsTree += start + ' ';
    isVisited[start] = true;

    for (let i = 1; i <= len; i += 1) {
        if (!isVisited[i] && mat[start][i]) {
            DFS(i, mat, len)
        }
    }
};

const BFS = (start, mat) => {
    let q = [];
    let path = '';

    q.push(start);
    while (q.length) {
        const current = q.shift();
        isVisited[current] = true;
        path += current + ' ';

        for (let i = 1; i < len; i += 1) {
            if (mat[current][i] && !isVisited[i]) {
                isVisited[i] = true;
                q.push(i)
            }
        }
    }
    return path;
};

// solution(vertices, edges, start);

// solution([1, 1, 1, 2, 3], [2, 3, 4, 4, 4], 1)
// solution([5, 5, 1, 3, 3], [4, 2, 2, 4, 1], 3)
// solution([999], [1000], 1000)
// solution([5, 5, 1, 3, 3, 3], [4, 2, 2, 4, 1, 9], 3)