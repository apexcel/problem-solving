# 풀이

## 첫 번째 풀이

풀긴했는데 효율성 폭망

```js
function solution(gems) {
    const uniqueGems = [...new Set(gems)];
    const map = new Map();
    let mn = -1, mx = 100001;

    for (let i = 0, j = uniqueGems.length - 1; j < gems.length; j += 1) {
        for (let k = i; k <= j; k += 1) {
            const gem = gems[k];
            if (map.has(gem)) {
                if (map.get(gem) < k) {
                    map.set(gem, k);
                    i += 1;
                }
            }
            else map.set(gem, k);
        }
        if (map.size === uniqueGems.length) {
            let begin = 100001, end = -1;
            map.forEach(v => {
                if (v < begin) begin = v;
                if (v > end) end = v;
            })
            if (end - begin < mx - mn) {
                mn = begin, mx = end;
            }
        }
    }
    return [mn + 1, mx + 1]
}
```

## 두 번째 풀이

$O(n)$에 풀이 가능

```js
function solution(gems) {
    const uniqueGems = [...new Set(gems)];
    const map = new Map();
    const possibles = [];

    let begin = 0, end = 0;
    while (begin <= end && end < gems.length) {
        if (map.size < uniqueGems.length) {
            // 새로 들어온 보석이 기존에 존재한다면
            if (map.has(gems[end])) {
                // 제거한다. 이유는 map에 순서대로 정렬시키기 위해서
                map.delete(gems[end]);
            }
            // 다시 추가하게 되면서 맨 마지막에 등록된다.
            map.set(gems[end], end);
            end += 1;
        }
        // 현재까지의 보석수가 유니크셋과 같다면
        if (map.size === uniqueGems.length) {
            // 시작 인덱스와 마지막 인덱스 찾는다
            const iter = Array.from(map);
            // 앞서 삭제하고 추가하는 로직을 반복해야 정렬된 상태를 가질 수 있음
            const lo = iter[0][1] + 1, hi = iter[iter.length - 1][1] + 1;
            possibles.push([hi - lo, lo, hi]);
            // 시작 인덱스의 보석을 제거하고 시작 포인터 증가
            map.delete(gems[lo - 1]);
            begin += 1;
        }
    }

    possibles.sort((a, b) => a[0] - b[0] || a[1] - b[1]);
    return [possibles[0][1], possibles[0][2]];
}
```