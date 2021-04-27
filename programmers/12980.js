// https://programmers.co.kr/learn/courses/30/lessons/12980

// const solution = n => {
//     let count = 0;
//     while (n) {
//         if (!(n % 2)) {
//             n = n / 2;
//             continue;
//         }
//         n = n - 1;
//         count += 1;
//     }
//     return count;
// };

// 띠용스러운 풀이
const solution = n => (n).toString(2).match(/1/g).length;
