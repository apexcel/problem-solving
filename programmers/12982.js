// https://programmers.co.kr/learn/courses/30/lessons/12982

const solution = (D, budget) => {
    let cnt = 0, sum = 0;
    D = D.sort((a, b) => a - b);
    for (let d of D) {
        sum += d;
        if (sum <= budget) cnt += 1;
        else break;
    }
    return cnt;
};

solution([1, 3, 2, 5, 4], 9)
//solution([2, 2, 3, 3], 10)