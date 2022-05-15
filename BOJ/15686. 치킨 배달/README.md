---
문제번호: 15686
문제이름: '치킨 배달'
주소: 'https://www.acmicpc.net/problem/15686'
분류: ['구현', '브루트포스 알고리즘']
---

# 풀이

치킨 가게와 집들 간의 맨하탄 거리를 구하는 것은 쉬웠는데, m개만 골라내는 것을 어떻게 할 수 있을까 떠올리는 게 어려웠다. 알고리즘 분류가 브루트포스인 것을 보아 완전 탐색을 해야한다는 것을 알았다. 이 문제에서 중요한 것을 뽑자면 다음과 같다.

1. 가게와 집들의 좌표를 구하고 이 좌표를 통해서 맨하탄 거리를 계산 해야한다.
2. 가게의 좌표 목록에서 m개 만큼 뽑아낼 수 있어야 한다. (조합)
3. 가게와 집들간의 맨하탄 거리의 총합 계산에 유의

3번 같은 경우 처음에는 2차원 배열을 만들어서 2차원 배열의 값을 최소 값으로 계산하면서 갱신했다. 그러나 가게 -> 집이 아닌 집 -> 가게 순으로 순회를 하면 각각의 집마다 각각의 가게까지의 최단 맨하탄 거리를 계산할 수 있다. 이걸 못 깨달아서 조금 헤맸다.

```js
const [info, ...data] = require('fs').readFileSync('./data.in').toString().trim().split('\n');
const [n, m] = info.split(' ').map(Number);
const shops = [], houses = [];
const { abs, min } = Math, INF = 987654321;

data.forEach((d, y) => d.split(' ').forEach((v, x) => {
    if (v === '2') shops.push([x, y]);
    if (v === '1') houses.push([x, y]);
}));

const calc = (picked) => {
    let sum = 0, tmp;
    /**
     * for (picked) 내부에 for (houses)처럼 반복문을 순회하면 가게와 집들간의
     * 거리를 계산하기 위해 2차원 배열이 필요하다. 그러나
     * for (houses) 내부에 for (picked) 형태로 순회를 하면 각 가게와 집간의 거리를
     * 변수 하나를 통해 얻을 수 있다.
     **/
    // 집 먼저 순회
    for (let [ex, ey] of houses) {
        tmp = INF;
        // 집이 기준이 되고 가게를 순회하므로
        // 해당 집에서부터 가장 가까운 치킨 가게가 어딘지 변수 하나로 파악할 수 있다.
        for (let [bx, by] of picked) {
            tmp = min(tmp, abs(bx - ex) + abs(by - ey));
        }
        sum += tmp;
    }
    return sum;
}

const picked = [];
let dist = INF;
const pick = (depth, begin) => {
    if (depth === m) {
        dist = min(dist, calc(picked));
        return;
    }

    for (let i = begin; i < shops.length; i += 1) {
        picked.push(shops[i]);
        pick(depth + 1, i + 1);
        picked.pop();
    }
}

pick(0, 0);
console.log(dist);
```