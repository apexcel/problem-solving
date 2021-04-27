// https://programmers.co.kr/learn/courses/30/lessons/68644

const solution = A => {
    let cache = [];
    A.forEach((v, i) => {
        for (let j = i + 1; j < A.length; j++) {
            cache.push(v + A[j]);
        }
    });
    return [...(new Set(cache))].sort((a, b) => a - b);;
};

solution([2, 1, 3, 4, 1])
solution([5, 0, 2, 7])