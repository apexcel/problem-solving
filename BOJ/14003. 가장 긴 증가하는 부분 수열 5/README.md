---
문제번호: 14003
문제이름: '가장 긴 증가하는 부분 수열 5'
주소: 'https://www.acmicpc.net/problem/14003'
분류: ['이분 탐색', '가장 긴 증가하는 부분 수열: o(n log n)']
---

# 풀이

기존의 $O(nlogn)$으로 LIS를 구하는 방법에서 약간의 코드가 추가되었다. LIS에 길이를 구하기 위해 `tails` 배열에 원소를 추가할 때 마다 스택에 해당 원소의 `[인덱스, 값]`을 추가한다. 이후 스택의 원소를 하나씩 꺼내보면서 LIS의 길이(`j`)를 하나씩 줄이면서 스택에서 꺼낸 인덱스와 일치하는지 확인한다. 스택에서 꺼낸 인덱스와 `j`가 같다면 리턴 배열에 추가하고 같지 않다면 무시한다. 이후 리턴 배열을 뒤집으면 된다.

```js
const [n, str] = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');
const nums = str.split(' ').map(Number);

const binSearch = (arr, target) => {
    let lo = 0, hi = arr.length - 1, mid;

    while (lo < hi) {
        mid = Math.floor((lo + hi) / 2);
        arr[mid] < target ? lo = mid + 1 : hi = mid;
    }

    return lo;
};

const lis = arr => {
    const tails = [arr[0]];
    const stk = [[0, arr[0]]]; // 처음 인덱스와 원소
    let idx = 0;

    for (let i = 1; i < +n; i += 1) {
        if (tails[idx] < arr[i]) {
            idx += 1;
            tails[idx] = arr[i];
            stk.push([idx, arr[i]]); // tails에 새로 담긴 [인덱스, 원소]를 추가
        }
        else {
            const j = binSearch(tails, arr[i]);
            tails[j] = arr[i];
            stk.push([j, arr[i]]); // tails에 교체될 [인덱스, 원소]를 추가
        }
    }

    const seq = [];
    for (let i = stk.length - 1, j = idx; i >= 0; i -= 1) { // 스택을 거꾸로 돌면서
        if (stk[i][0] === j) { // 스택의 인덱스가 LIS 길이와 같으면
            seq.push(stk[i][1]); // 해당 인덱스의 원소 값을 가져오고
            j -= 1; // 찾을 LIS 길이 감소
        }
    }

    console.log(idx + 1);
    console.log(seq.reverse().join(' '));
};

lis(nums);
```

## 참조

- "Construction of Longest Increasing Subsequence(LIS) and printing LIS sequence", *GeeksforGeeks*, https://www.geeksforgeeks.org/construction-of-longest-monotonically-increasing-subsequence-n-log-n/