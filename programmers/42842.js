// https://programmers.co.kr/learn/courses/30/lessons/42842

const solution = (b, y) => {
    let qoutient = 0;
    for (let divisor = 1; divisor <= y; divisor += 1) {
        if (!(y % divisor)) {
            qoutient = y / divisor;
            if (2 * (qoutient + divisor) + 4 === b) {
                return [qoutient + 2, divisor + 2];
            }
        }
    }
};

solution(10, 2)
solution(8, 1)
solution(24, 24)