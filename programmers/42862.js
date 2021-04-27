// https://programmers.co.kr/learn/courses/30/lessons/42862

const tc = {
    n: 5,
    lost: [2, 4],
    reserve: [1, 3, 5]
};

const solution = (n, lost, reserve) => {
    const newReserve = reserve.filter(v => !lost.includes(v)),
          newLost = lost.filter(v => !reserve.includes(v));

    let k = 0;

    newLost.map(v => {
        for (let j = 0; j < newReserve.length; j++) {
            if (v === newReserve[j] - 1 || v === newReserve[j] + 1) {
                k++;
                newReserve[j] = -1;
                break;
            }
        }
    })
    return n - (newLost.length - k);
};

// better way

const solution = (n, lost, reserve) => {
    const newReserve = reserve.filter(v => !lost.includes(v)),
          newLost = lost.filter(v => !reserve.includes(v));

    const ret = newLost.filter(v => newReserve.find((e, j) => {
        const std = v === e - 1 || v === e + 1;
        if (std) {
            delete newReserve[j]
        }
        return std
    })).length;

    return n - (newLost.length - ret);
};

solution(tc.n, tc.lost, tc.reserve)