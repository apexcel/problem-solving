---
문제번호: 15810
문제이름: '풍선 공장'
주소: 'https://www.acmicpc.net/problem/15810'
분류: ['이분 탐색', '매개 변수 탐색']
---

# 풀이

특정 시간을 정하고 그 시간내에 만들 수 있는 풍선의 개수를 계산한다. `시간 / 스태프 효율`이 시간 당 만들 수 있는 풍선이므로 시간을 조절하면서 최소 시간을 찾는 것.

## 첫 번째 풀이

```js
const [info, nums] = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');
const [staffs, balloons] = info.split(' ').map(Number);
const efficiencies = nums.split(' ').map(Number);

let lo = 1, hi = 10e12, mid;
let cnt, res;

while (lo <= hi) {
    mid = Math.floor((lo + hi) / 2); // 시간이 mid 일 때
    cnt = efficiencies.reduce((acc, cur) => acc + Math.floor(mid / cur), 0); // 풍선을 몇 개나 만들 수 있나

    if (cnt >= balloons) { // 만들어야 하는 수 보다 크거나 같은 경우
        hi = mid - 1;
        res = mid;
    }
    else {
        lo = mid + 1;
    }
}
console.log(res);
```

## 두 번째 풀이

만들 수 있는 풍선의 개수를 카운팅하는 도중 balloons의 값을 넘어가면 바로 중단하므로 시간 단축 가능.

```js
const [info, nums] = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');
const [staffs, balloons] = info.split(' ').map(Number);
const efficiencies = nums.split(' ').map(Number);

let lo = 1, hi = 10e12, mid;
let cnt, res;

while (lo <= hi) {
    mid = Math.floor((lo + hi) / 2);
    cnt = 0;
    for (let i = 0; i < efficiencies.length; i += 1) {
        cnt += Math.floor(mid / efficiencies[i]);
        // 만들 수 있는 풍선의 개수를 세다가 크거나 같아지면 바로 중단하므로써
        // 시간 효율성을 증가 시킴
        if (cnt >= balloons) {
            hi = mid - 1;
            res = mid;
            break;
        }
    }

    if (cnt < balloons) {
        lo = mid + 1;
    }
}
console.log(res);

```