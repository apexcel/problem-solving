// https://programmers.co.kr/learn/courses/30/lessons/42587

const solution = (P, loc) => {
    let k = 0, isPrinted = false; 

    do {
        const index = P.findIndex(v => v === Math.max(...P));
        console.log(P, loc, k)

        if (index !== -1) {
            if (P[0] === P[index]) {
                if (loc === 0) isPrinted = true;
                P.shift();
                k += 1;
            }
            else {
                let p = P.shift();
                P.push(p);
            }
            if (loc === 0) {
                loc = P.length;
            }
        }
        loc -= 1;
        console.log(P, loc, k)
    }
    while (!isPrinted);
    console.log(k)
    return k;
};

solution([2, 1, 3, 2], 2)
solution([9, 8, 9, 10], 0) // 3번
// solution([1, 1, 9, 1, 1], 3) // 3번
// solution([1, 1, 9, 1, 1, 1], 0)