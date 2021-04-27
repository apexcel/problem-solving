// https://programmers.co.kr/learn/courses/30/lessons/12906

const solution = (arr) => {
    let a = [];
    arr.forEach((e, i) => e !== arr[i-1] ? a.push(e) : a);
    return a;
}

solution([1,1,3,3,0,1,1,2])