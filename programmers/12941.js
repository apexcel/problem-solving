// https://programmers.co.kr/learn/courses/30/lessons/12941

const solution = (A, B) => {
    A = A.sort((a, b) => a - b);
    B = B.sort((a, b) => b - a);
    return A.reduce((acc, v, i) => acc += v * B[i], 0);
};


solution([1,4,2], [5,4,4])
solution([1,2], [3,4])