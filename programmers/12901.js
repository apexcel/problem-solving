// https://programmers.co.kr/learn/courses/30/lessons/12901

const solution = (a, b) => {
    const D = ['SUN', 'MON', 'TUE', 'WED', 'THU', 'FRI', 'SAT'];
    // return D[(new Date(2016, a - 1, b).getDay())];
    let M = [11, 12, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
        Y = a <= 2 ? 15 : 16;
    let res = b + Math.floor((13 * M[a - 1] - 1) / 5) + Y + Math.floor(Y/4) - 35;
    res = res >= 0 ? res % 7 : 7 - (Math.abs(res) % 7);
    return D[res];
};

solution(1, 1)