// https://programmers.co.kr/learn/courses/30/lessons/12933

const solution = n => +((''+n).split('').map(v => +v).sort((a, b) => b - a).join(''));

const solution2 = n => {
    let k = n, l = [], ret = 0;
    for (let i = 0; k > 0; i++) {
        l.push(k % 10);
        k = Math.floor(k / 10);
    }
    const len = l.length;
    l.sort((a, b) => b - a);
    l.forEach((v, i) => {
        ret += v * Math.pow(10, len - i - 1);
    });
    return ret;
};

console.log(solution(12345))
console.log(solution2(12345))