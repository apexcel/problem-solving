const dp = [1, 1, 2];
for (let i = 3; i <= 20; i += 1) {
    dp[i] = dp[i - 1] * i;
}

function solution(N, K) {
    const nums = Array(N).fill(0).map((_, i) => i + 1);
    const ret = [];

    const pick = (n, k) => {
        if (n === 0) return;
        const pos = Math.floor((k - 1) / dp[n - 1]);
        const rem = k % dp[n - 1];
        ret.push(nums.splice(pos, 1)[0]);
        pick(n - 1, rem)
    }

    pick(N, K);
    return ret;
}

solution(4, 24)