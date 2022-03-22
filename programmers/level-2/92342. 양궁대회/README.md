# 풀이

c++로 푼 풀이는 JS로 통과가 안된다. 시간이 오래 걸려서 그런듯. 그래서 다른 사람 풀이를 참고하여 JS로 풀이했다. DFS로 완전탐색하면 중복조합으로 $11H10 = 21C10 = 184756$가지가 된다. 이는 불필요한 중복을 포함하고 있고 실제로는 어피치보다 한 발만 더 쏘면 점수를 얻기 때문에 화살을 쏠 것인지 쏘지 않을 것인지만 결정하여 문제를 풀면 된다.


```js
const calc = (apeach, ryan) => {
    let apeachScore = 0, ryanScore = 0;
    for (let i = 0; i < 11; i += 1) {
        if (!apeach[i] && !ryan[i]) continue;
        apeach[i] >= ryan[i] ? apeachScore += 10 - i : ryanScore += 10 - i;
    }
    return ryanScore - apeachScore;
}

// 더 낮은 점수에 꽂힌 화살이 있는지 판별
const isLowerExist = (res, ryan) => {
    for (let i = 10; i >= 0; i -= 1) {
        if (ryan[i] > res[i]) return true;
        else if (ryan[i] < res[i]) return false;
    }
    return false;
}

function solution(n, apeach) {
    const ryan = Array(11).fill(0);
    let res = Array(11).fill(0), mx = 0;

    const dfs = (depth, shots) => {
        // 화살을 다 쏜 경우
        if (depth === n + 1 || shots === 0) {
            // 남은 화살을 0점 과녁에 몰아준다.
            ryan[10] += shots;
            const diff = calc(apeach, ryan);
            if (diff > 0) {
                if (diff === mx && isLowerExist(res, ryan)) {
                    res = ryan.slice();
                }
                else if (diff > mx) {
                    res = ryan.slice();
                    mx = diff;
                }
            }
            ryan[10] = 0;
            return;
        }

        // 화살을 쏘는 경우
        if (apeach[depth] < shots) {
            ryan[depth] += apeach[depth] + 1;
            dfs(depth + 1, shots - apeach[depth] - 1);
            ryan[depth] -= apeach[depth] + 1;
        }
        // 화살을 쏘지 않는 경우
        dfs(depth + 1, shots);
    }
    dfs(0, n);
    return mx === 0 ? [-1] : res;
}
```