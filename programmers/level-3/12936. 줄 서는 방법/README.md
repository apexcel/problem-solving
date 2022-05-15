# 첫 번째 풀이

효율성 Fail

```js
function solution(n, k) {
    const peoples = Array(n).fill(0).map((_, i) => i + 1);
    const visited = Array(n).fill(0);
    const tmp = [];
    let ret, cnt = 1, flag = false;

    const pick = (depth) => {
        if (flag) return;
        if (depth === n) {
            if (cnt === k) {
                ret = tmp.slice();
                flag = true;
            }
            cnt += 1;
            return;
        }

        for (let i = 0; i < peoples.length; i += 1) {
            if (!visited[i]) {
                visited[i] = 1;
                tmp.push(peoples[i])
                pick(depth + 1)
                tmp.pop();
                visited[i] = 0;
            }
        }
    }

    pick(0);
    return ret;
}
```

# 두 번째 풀이

숫자들이 오름차순으로 정렬된 배열에 따라 순열을 구성할 때 순열 배열의 가장 앞자리는 $(n-1)!$마다 바뀐다. 예컨대 $n=4$인 경우 모든 경우의 수는 $24$인데 6번째 마다 순열 배열의 앞자리가 바뀐다. 따라서 $\frac{24}{6} = 4$이므로 총 $n$개로 나뉜다. 이 앞자리를 인덱스로 활용하여 값을 가져오면 된다.

```js
const dp = [1, 1, 2];
for (let i = 3; i <= 20; i += 1) {
    dp[i] = dp[i - 1] * i;
}

function solution(n, k) {
    // 원본 배열
    const nums = Array(n).fill(0).map((_, i) => i + 1);
    const ret = [];

    const pick = (n, k) => {
        if (n === 0) return;
        // 전체에서 몇 번째에 위치하는가, -1인 경우 배열을 끝을 나타내므로
        // 이렇게 표현해도 된다.
        const pos = Math.floor((k - 1) / dp[n - 1]);
        // 다음 파라미터가 n - 1이 되므로 k의 나머지를 이용
        const rem = k % dp[n - 1];
        // 인덱스에 해당하는 값을 빼낸다
        ret.push(nums.splice(pos, 1)[0]);
        pick(n - 1, rem)
    }

    pick(n, k);

    return ret;
}
```