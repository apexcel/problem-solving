---
문제번호: 1697
문제이름: '숨바꼭질'
주소: 'https://www.acmicpc.net/problem/1697'
분류: ['그래프 이론', '그래프 탐색', '너비 우선 탐색']
---

# 풀이

## 첫 번째 풀이

BFS로 풀음. 같은 코드 JS로 작성하면 TLE나며 직접 queue 클래스를 사용한 경우 느리지만 통과.

```c++
#include <iostream>
#include <queue>

using namespace std;

typedef pair<int, int> pii;

int is_visited[1000001];

int main() {
    ios_base::sync_with_stdio(false);
    cin.tie(nullptr);
    cout.tie(nullptr);

    int n, k;
    cin >> n >> k;

    queue<pii> q;
    int pos = n, cnt = 0;
    q.push(make_pair(n, cnt));

    while (!q.empty()) {
        pii cur = q.front();
        pos = cur.first;
        cnt = cur.second;
        q.pop();
        if (pos == k) break;
        if (pos > 1000001 || is_visited[pos]) continue;
        is_visited[pos] = 1;

        q.push(make_pair(pos - 1, cnt + 1));
        q.push(make_pair(2 * pos, cnt + 1));
        q.push(make_pair(pos + 1, cnt + 1));
    }

    cout << cnt;
    return 0;
}
```

개느림. 768ms

```js
const [n, k] = require('fs').readFileSync('/dev/stdin').toString().trim().split(' ').map(Number);
class Queue {
    constructor() {
        this.q = [];
        this.head = 0;
        this.cur = 0;
    }

    push(val) {
        this.q[this.cur++] = val;
    }

    pop() {
        return this.q[this.head++];
    }
}

const solution = () => {
    const q = new Queue();
    const isVisited = Array(100001).fill(0);
    let pos = +n, cnt = 0;
    q.push([pos, cnt]);

    while (pos !== +k) {
        [pos, cnt] = q.pop();
        if (pos > 100001 || isVisited[pos]) continue;
        isVisited[pos] = 1;

        q.push([pos - 1, cnt + 1]);
        q.push([2 * pos, cnt + 1]);
        q.push([pos + 1, cnt + 1]);
    }
    return console.log(cnt);
};

solution();
```

## 두 번째 풀이

다른 방법으로 풀 수 있을 것 같아서 다른 사람 풀이 찾아봄.

```js
const [n, k] = require('fs').readFileSync('/dev/stdin').toString().trim().split(' ').map(Number);

const find = x => {
    if (x <= n) return n - x;
    if (x === 1) return n + 1;
    return x & 1 ? Math.min(find(x - 1), find(x + 1)) + 1 : Math.min(1 + find(x >> 1), x - n);
};

console.log(find(+k));
```

- 동생 위치가 수빈이 위치보다 더 작은 경우
    - 뒤로만 가야하므로 동생과 수빈이 거리가 답
- 동생 위치가 수빈이 위치보다 큰 경우
    1. 동생 위치가 짝수인 경우
        - 수빈이가 n/2인 위치에서 2배 할 수 있음.
        - 아니면 그냥 1칸씩 걸어서 움직일 수 있음.
    2. 동생 위치가 홀수인 경우
        - 2배해서 바로 도달 불가능함
        - 따라서 -1 또는 1칸 움직여서 도달가능한지 확인한다.

예시 1. 
n = 5, k = 17
5 - 10 - 9 - 18 - 17

예시 2.
n = 13, k = 16
13 - 14 - 15 - 16

예시 3.
n = 2, k = 20
2 - 4 - 5 - 10 - 20