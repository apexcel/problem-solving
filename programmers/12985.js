// https://programmers.co.kr/learn/courses/30/lessons/12985

// 첫 풀이
function solution(n,a,b) {
    let [bigger, smaller] = b > a ? [b, a] : [a, b];
    let cnt = 1;
    
    while (true) {
        if (bigger - smaller === 1 && !(bigger % 2)) {
            break;
        }
        smaller = smaller % 2 ? (smaller + 1) / 2 : smaller / 2;
        bigger = bigger % 2 ? (bigger + 1) / 2 : bigger / 2;
        cnt += 1;
    }
    return cnt;
}

// 다른 풀이

function sol2(n, a, b) {
    let cnt = 0;
    while (a !== b) {
        a = (a + 1) >> 1;
        b = (b + 1) >> 1;
        cnt += 1;
        console.log(a, b)
    }
    return cnt;
}

console.log(sol2(8, 2, 3))