// https://programmers.co.kr/learn/courses/30/lessons/12909

const solution = s => {
    const stack = [];
    for (let _ of s) {
        if (_ === '(') stack.push(_);
        else {
            if (stack.pop() ==='(') {
                continue;
            }
            else {
                return false;
            }
        }
    }
    return !stack.length > 0;
};

console.log(solution("(())()"))
console.log(solution("(()("))