// https://programmers.co.kr/learn/courses/30/lessons/70128

const solution = (A, B) => {
    return A.reduce((acc, _, i) => acc += A[i] * B[i], 0);
};