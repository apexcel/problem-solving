// https://programmers.co.kr/learn/courses/30/lessons/12945

let fib = [0, 1, 1]
const fibo = n => {
    if (n < 3) {
        return fibs[n];
    }
    // (A + B) % X = ((A % X) + (B % X)) % X 와 같다!
    for (let i = 3; i <= n; i += 1) {
        fib[0] = fib[1] % 1234567;
        fib[1] = fib[2] % 1234567;
        fib[2] = fib[0] + fib[1];
    }
    return fib[2] % 1234567;
};


const solution = n => fibo(n);

console.log(solution(100000))
