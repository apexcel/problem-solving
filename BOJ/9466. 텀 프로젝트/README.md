---
문제번호: 9466
문제이름: '텀 프로젝트'
주소: 'https://www.acmicpc.net/problem/9466'
분류: ['그래프 이론', '그래프 탐색', '깊이 우선 탐색']
---

# 풀이

DFS문제인데 $O(n)$의 풀이로만 통과할 수 있다. 일차원 배열 순회하면서 풀어보려고 했는데 실패해서 그냥 DFS로 풀이

```js
const [tc, ...data] = require('fs').readFileSync('./data.in').toString().trim().split('\n');

// 전역으로 설정하지 않으면 메모리 초과가 났다
const isVisited = Array(100000);
const done = Array(100000);

const solution = (index, puplis) => {
    isVisited[index] = 1;
    const next = puplis[index] - 1;
    let cnt = 0;
    
    // 방문하지 않은 노드라면
    if (!isVisited[next]) {
        cnt += solution(next, puplis);
    }
    // 방문한 노드지만 팀 배정이 끝난 노드가 아니라면
    else if (!done[next]) {
        cnt += 1; // 스스로 카운팅
        for (let i = next; i !== index; i = puplis[i] - 1) {
            cnt += 1; // 팀원 카운팅
        }
    }
    // 팀에 속하든 속하지 않든 배정이 끝났음
    done[index] = 1;

    return cnt;
}

let res = '';
for (let i = 0; i < data.length; i += 2) {
    // 재선언 보다 fill(x)가 더 빠른듯?
    isVisited.fill(0);
    done.fill(0);

    const n = +data[i], puplis = data[i + 1].split(' ').map(Number);
    let total = n;    
    for (let j = 0; j < n; j += 1) {
        // 이미 방문했으면 다시 방문할 필요 없음
        if (!isVisited[j]) total -= solution(j, puplis);
    }
    res += total + '\n';
}
console.log(res);
```