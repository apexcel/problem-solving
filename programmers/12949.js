// https://programmers.co.kr/learn/courses/30/lessons/12949

// 이게 제일 빠름
const solution = (A, B) => {
    let list = [];
    for (let i = 0; i < A.length; i += 1) {
        let temp = [], sum = 0;
        for (let j = 0; j < B[0].length; j += 1) {
            for (let k = 0; k < B.length; k += 1) {
                sum += A[i][k] * B[k][j];
            }
            temp.push(sum)
            sum = 0;
        }
        list.push(temp)
    }
    return list;
}

// 제일 느림
const solution = (A, B) => {
    const list = [];
    for (const i in A) {
        let temp = [], sum = 0;
        for (const j in B[0]) {
            for (const k in B) {
                sum += A[i][k] * B[k][j];
            }
            temp.push(sum);
            sum = 0;
        }
        list.push(temp)
    }
    return list;
}

// 한 줄 컷
const solution = (A, B) => A.map(row => B[0].map((v, i) => row.reduce((acc, val, idx) => acc + val * B[idx][i], 0)))