// https://programmers.co.kr/learn/courses/30/lessons/12934

const solution = n => {
    const a =(''+Math.pow(Math.sqrt(n)+1, 2)).split('.');
    return a[1] ? -1 : +a[0];
};

console.log(solution(121))
console.log(solution(3))