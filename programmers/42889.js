// https://programmers.co.kr/learn/courses/30/lessons/42889
const tc = {
    n: 5,
    stages: [2, 1, 2, 6, 2, 4, 3, 3]
};

const solution = (n, stages) => {
    let f = Array(n).fill(0), max = 0, rank = [];

    f.map((e, i) => {
        let currentStage = i+1,
            completed = 0,
            staying = 0;

        for (let s of stages) {
            if (currentStage < s) completed++;
            if (currentStage === s) staying++;
        }
        f[i] = completed === 0 ? staying : staying / (completed + staying);
    });

    f.forEach(() => {
        max = f.findIndex(e => Math.max(...f) === e);
        rank.push(max+1);
        f[max] = -1;
    });

    return rank;
};

solution(tc.n, tc.stages)