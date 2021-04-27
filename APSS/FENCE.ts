const tc = {
    a: [7, 1, 5, 9, 6, 7, 3],
    b: [1, 4, 4, 4, 4, 1, 1],
    c: [1, 8, 2, 2]
};

const bruteForce = (fence: Array<number>) => {
    const len = fence.length;
    let size = 0;

    fence.forEach((v, i) => {
        let min = v;
        for (let j = i; j < len; j++) {
            min = Math.min(min, fence[j]);
            size = Math.max(size, (j - i + 1) * min);
        }
    });

    return size;
}
