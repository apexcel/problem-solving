/**
 * @param {number} n 
 */
function solution(n) {
    const trace = [];

    const hanoi = (n, from, by, to) => {
        if (n === 0) return;
        hanoi(n - 1, from, to, by);
        trace.push([from, to]);
        hanoi(n - 1, by, from, to);
    }

    hanoi(n, 1, 2, 3);
    return trace;
}

console.log(solution(3))