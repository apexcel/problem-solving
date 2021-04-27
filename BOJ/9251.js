const sc = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');

const LCS = (str1, str2) => {
    const len1 = str1.length, len2 = str2.length;
    let cache = Array.from(Array(len1+1), () => Array(len2+1).fill(0));
    
    for (let i = 1; i <= len1; i += 1) {
        for (let j = 1; j <= len2; j++) {
            if (str1[i-1] === str2[j-1]) {
                cache[i][j] = cache[i-1][j-1] + 1;
            }
            else {
                cache[i][j] = Math.max(cache[i-1][j], cache[i][j-1]);
            }
        }
    }

    // console.table(cache);
    return cache[len1][len2]
};

console.log(LCS(sc[0], sc[1]));

/*
    LCS(Longest Common Subsequence, 최장 공통 부분 수열)문제는 두 수열이 주어졌을 때, 모두의 부분 수열이 되는 수열 중 가장 긴 것을 찾는 문제이다.
    예를 들어, ACAYKP와 CAPCAK의 LCS는 ACAK가 된다.
*/