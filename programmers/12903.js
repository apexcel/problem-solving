// https://programmers.co.kr/learn/courses/30/lessons/12903

const solution = (s) => {
    const i = Math.floor(s.length / 2);
    return s.length % 2 === 0 ? s[i-1]+s[i] : s[i]
}

console.log(solution('abcdefgh'))