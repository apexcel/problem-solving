// https://programmers.co.kr/learn/courses/30/lessons/12977

let sum = 0, total = 0;

const solution = nums => {
    let isVisited = Array(nums.length).fill(false);
    dfs(0, 0, nums, isVisited);
    return total;
};

const isPrime = n => {
    if (n < 2) return false;
    for (let i = 2; i * i <= n; i += 1) {
        if (!(n % i)) return false;
    }
    return true;
};

const dfs = (depth, index, nums, isVisited) => {
    if (depth === 3) {
        if (isPrime(sum)) {
            total += 1;
        }
        return;
    }

    for (let i = index; i < nums.length; i += 1) {
        if (!isVisited[i]) {
            isVisited[i] = true;
            sum += nums[i];
            dfs(depth + 1, i, nums, isVisited);
            sum -= nums[i]
            isVisited[i] = false;
        }
    }
}

// solution([1, 2, 7, 6, 4])
solution([2, 4, 6])