// https://programmers.co.kr/learn/courses/30/lessons/12899

const solution = n => {
    let ret = '';
    while (n > 0) {
        let rem = n % 3;
        n = Math.floor(n / 3);

        if (rem === 0) {
            n -= 1;
            rem = 4;
        }

        ret = rem + ret;
    }
    return ret;
};