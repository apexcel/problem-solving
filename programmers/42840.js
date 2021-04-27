// https://programmers.co.kr/learn/courses/30/lessons/42840
const solution = (ans) => {
    const R = [3, 1, 2, 4, 5];
    let arr = [0, 0, 0], k = 0;
    
    ans.forEach((e, i) => {
        let a = (i % 5) + 1,
            b = i % 2 === 0 ? 2 : (i % 8 === 5 ? 4 : i % 8 === 7 ? 5 : i % 8),
            c = R[k % 5];
            
        if (e === a) arr[0]++;
        if (e === b) arr[1]++;
        if (e === c) arr[2]++;
        if (i % 2 !== 0) k++;
    });

    const max = Math.max(...arr);
    return arr.map((e, i) => e === max ? i+1 : null).filter(e => Boolean(e));
};

solution([1,3,2,4,2])
solution([1,2,3,4,5])