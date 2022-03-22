function solution(gems) {
    const uniqueGems = [...new Set(gems)];
    const map = new Map();
    const possibles = [];

    let begin = 0, end = 0;
    while (begin <= end && end < gems.length) {
        if (map.size < uniqueGems.length) {
            if (map.has(gems[end])) {
                map.delete(gems[end]);
            }
            map.set(gems[end], end);
            end += 1;
        }
        if (map.size === uniqueGems.length) {
            const iter = Array.from(map);
            const lo = iter[0][1] + 1, hi = iter[iter.length - 1][1] + 1;
            possibles.push([hi - lo, lo, hi]);
            map.delete(gems[lo - 1]);
            begin += 1;
        }
    }

    possibles.sort((a, b) => a[0] - b[0] || a[1] - b[1]);
    return [possibles[0][1], possibles[0][2]];
}

// console.log(solution(["DIA", "RUBY", "RUBY", "DIA", "DIA", "EMERALD", "SAPPHIRE", "DIA"]))
// console.log(solution(["A", "B", "B", "B", "B", "B", "B", "C", "B", "A"]))
console.log(solution(['A', 'B', 'B', 'C', 'A']))
// console.log(solution(['A', 'B', 'B', 'B', 'C', 'D', 'D', 'D', 'D', 'D', 'D', 'B', 'C', 'A']))
// console.log(solution(["A", "B", "B", "C", "A", "B", "C", "A", "B", "C"]))