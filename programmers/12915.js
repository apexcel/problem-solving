// https://programmers.co.kr/learn/courses/30/lessons/12915

const solution = (s, n) => {
    return s.sort((a, b) => {
        if (a[n] === b[n]) {
            for (let i = 0; i < a.length; i++) {
                if (a < b) return -1;
            }
        }
        else {
            return a.charCodeAt(n) - b.charCodeAt(n);
        }
    })
};


// use bulit-in func

// function solution(strings, n) {
//     return strings.sort((s1, s2) => s1[n] === s2[n] ? s1.localeCompare(s2) : s1[n].localeCompare(s2[n]));
// }