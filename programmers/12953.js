// https://programmers.co.kr/learn/courses/30/lessons/12953

const gcd = (a, b) => {
    return a % b === 0 ? b : gcd(b, a % b);
};

const lcm = (a, b) => {
    return a * b / gcd(a, b);
};

const solution = arr => {
    let res = 1;
    while (arr.length) {
        res = lcm(arr.pop(), res)
    }
    return res;
}

solution([2, 6, 8, 14])
// solution([4, 3, 7, 8])
// solution([1, 2, 3])