const calc = (apeach, ryan) => {
    let apeachScore = 0, ryanScore = 0;
    for (let i = 0; i < 11; i += 1) {
        if (!apeach[i] && !ryan[i]) continue;
        apeach[i] >= ryan[i] ? apeachScore += 10 - i : ryanScore += 10 - i;
    }
    return ryanScore - apeachScore;
}

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
        if (depth === n + 1 || shots === 0) {
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

        if (apeach[depth] < shots) {
            ryan[depth] += apeach[depth] + 1;
            dfs(depth + 1, shots - apeach[depth] - 1);
            ryan[depth] -= apeach[depth] + 1;
        }
        dfs(depth + 1, shots);
    }
    dfs(0, n);
    console.log(res)
    return mx === 0 ? [-1] : res;
}

solution(5, [2, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0], [0, 2, 2, 0, 1, 0, 0, 0, 0, 0, 0])
solution(1, [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], [-1])
solution(9, [0, 0, 1, 2, 0, 1, 1, 1, 1, 1, 1], [1, 1, 2, 0, 1, 2, 2, 0, 0, 0, 0])
solution(10, [0, 0, 0, 0, 0, 0, 0, 0, 3, 4, 3], [1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 2])