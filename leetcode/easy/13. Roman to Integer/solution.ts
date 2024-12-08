// https://leetcode.com/problems/roman-to-integer/description/
const table = {
    I: 1,
    V: 5,
    X: 10,
    L: 50,
    C: 100,
    D: 500,
    M: 1000,
}

function solution(input: string): number {
    let total = 0;
    let last = 0;

    // 뒤에서 부터 순회
    for (let i = input.length - 1; i >= 0; i -= 1) {
        const current = table[input[i]];
        // 현재 값이 마지막 값보다 작으면 빼주고 아니면 더해준다.
        total += current < last ? -current : current;
        // 마지막 값 갱신
        last = current;
    }

    return total;
}
