// https://programmers.co.kr/learn/courses/30/lessons/12921

const solution = n => {
    let P = [];
    for (let k = 2; k <= n; k++) {
        P[k] = k;
    }

    for (let i = 2; i <= n; i++) {
        if (!P[i]) continue;
        for (let j = 2*i; j <= n; j+=i) {
            P[j] = 0;
        }
    }
    return P.filter(v => Boolean(v)).length;
};