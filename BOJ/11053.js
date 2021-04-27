const sc = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');
const arr = sc[1].split(' ').map(v => parseInt(v, 10));
let dp = Array(Number(sc[0])).fill(1);

// for (let i = 0; i < arr.length; i += 1) {
//     let current = arr[i];
//     for (let j = 0; j < i; j += 1) {
//         if (current > arr[j]) {
//             dp[i] = Math.max(dp[i], dp[j] + 1);
//         }
//     }
// }
// // console.table(dp)
// console.log(Math.max(...dp));

const solution = (i) => {
    if (arr.length === i) {
        return Math.max(...dp)
    }
    const current = arr[i];
    for (let k = 0; k < i; k += 1) {
        if (current > arr[k]) {
            dp[i] = Math.max(dp[i], dp[k] + 1)
        }
    }
    return solution(i + 1);
}
console.log(solution(0));
// console.table(dp)
/*
    원래 했던 생각은 배열을 돌면서 현재 값 보다 다음 값이 크면 카운팅하고
    큰 값을 다시 조건을 걸어서 개수를 확인하는 방식을 사용하고자 함.
    그러나 [1, 4, 2, 3] 같은 조건을 통과할 수 없다.
    let c = [];
    for (let i = 0; i < arr.length; i += 1) {
        let cnt = 0, current = 0;
        for (let j = i; j < arr.length; j += 1) {
            if (arr[j] > current) {
                current = arr[j];
                cnt += 1;
            }
        }
        c[i] = cnt;
    }
    console.log(Math.max(...c))

    배열을 돌면서 현재 값을 포함해 자기 자신을 포함해 현재 인덱스까지의 
    작은 값을 배열에 저장 이중 가장 큰 값을 찾으면 된다.

    current는 현재 배열의 요소의 값이고 arr[j]는 current 이전까지의 인덱스 까지
    순회하며 current보다 작을 경우 dp배열에 저장된 현재까지의 작은 수 들의 합과 비교 대상 수까지의 합을 비교한다.
    이 중에서 더 큰 것을 현재 요소까지의 합으로 한다.
*/