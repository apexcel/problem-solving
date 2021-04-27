// https://programmers.co.kr/learn/courses/30/lessons/1845

const solution = nums => {
    const pick = nums.length / 2;
    const n = nums.reduce((acc, value) => {
        if (!acc.includes(value)) {
            acc.push(value);
        }
        return acc;
    }, []);
    return n.length < pick ? n.length : pick;
};

console.log(solution([3, 1, 2, 3]))