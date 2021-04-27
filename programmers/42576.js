// https://programmers.co.kr/learn/courses/30/lessons/42576

const participant = ["mislav", "stanko", "mislav", "ana"],
      completion = ["stanko", "ana", "mislav"]

const solution = (p, c) => {
    p.sort();
    c.sort();
    return p.find((e, i) => e !== c[i])
};

console.log(solution(participant, completion))