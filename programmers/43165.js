// https://programmers.co.kr/learn/courses/30/lessons/43165

let total = 0;
const solution = (numbers, target) => {
    const len = numbers.length;
    dfs(0, 0, target, len, numbers);
    console.log(total)
    return total;
};

const dfs = (begin, sum, target, len, numbers) => {
    if (begin >= len) {
        if (target === sum) {
            total += 1;
        }
        return;
    }

    dfs(begin + 1, sum + numbers[begin], target, len, numbers);
    dfs(begin + 1, sum - numbers[begin], target, len, numbers);
};

solution([1, 1, 1, 1, 1], 3)