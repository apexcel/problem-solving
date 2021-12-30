const testcases = [
    'w',
    'xbwwb',
    'xbwxwbbwb',
    'xxwwwbxwxwbbbwwxxxwwbbbwwwwbb'
];

function solution(quadtree) {
    let pos = 0;

    const reverse = () => {
        if (quadtree[pos] !== 'x') return quadtree[pos];
        pos += 1;
        const upperLeft = reverse();
        pos += 1;
        const upperRight = reverse();
        pos += 1;
        const lowerLeft = reverse();
        pos += 1;
        const lowerRight = reverse();
        
        return 'x' + lowerLeft + lowerRight + upperLeft + upperRight;
    }

    return reverse();
}

testcases.forEach(tc => console.log(solution(tc)));