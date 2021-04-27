const sc = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');
const arr = sc[1].split(' ').map(v => parseInt(v, 10));
// const tc = [
//     [10, -4, 3, 1, 5, 6, -35, 12, 21, -1],
//     [2, 1, -4, 3, 4, -4, 6, 5, -5, 1],
//     [-1, -2, -3, -4, -5]
// ];
const solution = arr => {
    const len = arr.length;
    let c = Array(len).fill(0);
    c[0] = arr[0];
    for (let i = 1; i < len; i += 1) {
        c[i] = Math.max(c[i-1] + arr[i], arr[i]);
    }
    // console.table(c);
    console.log(Math.max(...c))
};

solution(arr);
// (() => {
//     tc.map(v => solution(v));
// })()

/*
    지금까지 더한 총 값보다 현재 값이 더 크면 현재 값부터 새로 시작.
    따라서 지금까지 더한 값 + 현재 요소 값과 현재 인덱스 - 1 의 값과 현재 요소 값 중
    더 큰 것을 선택하여 저장. 이후 가장 큰 값을 찾아 반환.
*/