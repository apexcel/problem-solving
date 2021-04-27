// https://programmers.co.kr/learn/courses/30/lessons/17681

const testcase = {
    A: {
        n: 5,
        arr1: [9, 20, 28, 18, 11],
        arr2: [30, 1, 21, 17, 28]
    },
    B: {
        n: 6,
        arr1: [46, 33, 33 ,22, 31, 50],
        arr2: [27 ,56, 19, 14, 14, 10]
    }
};

const solution = (tc) => {
    const {n, arr1, arr2 } = tc.A;
    let map = [],
    A = arr1.map((el, idx) => el | arr2[idx]);
    A = A.map(el => (el.toString(2)).padStart(n, '0'));
    //console.log(A)
    A.forEach((el, i) => {
        let line = '';
        for (let j = 0; j < n; j++) {
            line += el[j] === '1' ? '#' : ' ';
        }
        map.push(line);
    });
    //console.log(map)
    return map;
};

solution(testcase)