// https://programmers.co.kr/learn/courses/30/lessons/12924

// 투 포인터로 풀면 된다.
const solution = n => {
    let sum = 0, counter = 0;
    for (let i = 1, j = 1; i < n || j <= n;) {
        if (sum <= n) {
            sum += j
            j += 1;
        }
        if (sum > n) {
            sum -= i;
            i += 1;
        }
        if (sum === n) {
            counter += 1;
        }
    }
    console.log(counter)
};

// 다른 풀이
// n의 약수 중 홀수의 개수를 찾으면 된다.
const solution = n => {
    let answer = 0;
    for (let i = 1; i <= n; i += 1) {
        if (n % i == 0 && i % 2 == 1)
            answer += 1
    }
    return answer;
};