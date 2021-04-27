// https://programmers.co.kr/learn/courses/30/lessons/42747

// const solution = citations => {
//     const len = citations.length;
//     let h = 0;
//     citations.sort((a, b) => a - b);

//     citations.forEach((_, i) => {
//         i = i + 1;
//         let ref = citations.filter(e => i <= e).length;
//         let rest = citations.filter(e => i !== e && i >= e).length;
//         // console.log(ref, rest)

//         if (ref >= i && rest <= i) {
//             h = i
//         }
//     })
//     console.log(h)
//     return h;
// };

const solution = citations => {
    // 큰 순서대로 정렬
    citations.sort((a, b) => b - a);
    let i = 0;
    // 최소한 한 편은 있으므로 1부터 시작
    while (i + 1 <= citations[i]) {
        // 현재 논문이 카운터 값보다 크면 1 증가
        i += 1;
    }
    console.log(i)
    return i;
}

solution([3, 0, 6, 1, 5])
solution([9, 9, 9, 10])
solution([1, 2])
solution([1, 1, 1, 1, 1])