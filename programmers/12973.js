// https://programmers.co.kr/learn/courses/30/lessons/12973

// 사실상 괄호 짝 맞추기와 다름 없으므로 스택을 이용해서 풀면된다.
// 이런 짝 맞추기 같은 경우 스택을 이용하자.

const solution = s => {
    if (s.length % 2) return 0;
    let stack = [];

    for (let i = 0; i < s.length; i += 1) {
        (stack[stack.length - 1] === s[i]) ? stack.pop() : stack.push(s[i]);
    }
    return stack.length ? 0 : 1;
};
// console.log(solution('babaabaad'))
console.log(solution('ababccbaba'))
// console.log(solution('a'))