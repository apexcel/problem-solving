function solution(n, works) {
    works.sort((a, b) => b - a);

    while (n > 0 && works[works.length - 1]) {
        const front = works[0];
        for (let i = 0; i < works.length; i += 1) {
            if (n > 0 && works[i] >= front) {
                works[i] -= 1;
                n -= 1;
            }
            else break;
        }
    }

    const ret = works.reduce((sum, cur) => sum += cur ** 2, 0);
    console.log(ret)
}

solution(1, [2, 1, 2])

// PQ로 풀어도 된다.