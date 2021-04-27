// https://programmers.co.kr/learn/courses/30/lessons/42883

// Time Limit Exceed
// const solution = (number, k) => {
//     let n = number.split(''),
//         len = n.length - 1,
//         charLen = k,
//         str = ''

//     for (let i = 0, pos = -1; i <= len - k; i += 1, charLen += 1) {
//         let max = 0;
//         for (let j = pos + 1; j <= charLen; j += 1) {
//             if (max < n[j]) {
//                 max = n[j];
//                 pos = j;
//             }
//         }
//         str += max;
//     }
//     return str;
// };

const solution = (number, k) => {
    const stack = [];
    let head = 0,
        del = k;

    stack.push(number[head++]); // number[head]를 push 하고 head += 1
    while (stack.length < number.length - k || head < number.length) {
        if (del && stack[stack.length - 1] < number[head]) {
            stack.pop();
            del -= 1;
            continue;
        }
        stack.push(number[head++]);
        console.log(stack)
    }

    return stack.slice(0, number.length - k).join('');
};


solution('4177252841', 4)
// solution('1231234', 3)
// solution('9990123999', 4)