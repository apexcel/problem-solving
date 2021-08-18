/**
 *  https://programmers.co.kr/learn/courses/30/lessons/42579
 * @param {string[]} genres 
 * @param {number[]} plays 
 * @returns {number[]}
 */
function solution(genres, plays) {
    let totalPlays = new Map(), candidates = new Map();

    for (let i = 0; i < genres.length; i += 1) {
        let info = candidates.get(genres[i]) || [[-1, 0], [-1, 0]];
        info = compare(info, [i, plays[i]]);

        totalPlays.set(genres[i], (totalPlays.get(genres[i]) || 0) + plays[i]);
        candidates.set(genres[i], info);
    }

    return Array.from(totalPlays)
        .sort((a, b) => b[1] - a[1])
        .flatMap(pairs => candidates.get(pairs[0]).map(pair => pair[0]).filter(id => id !== -1));
}

function compare(origin, target) {
    let [first, second] = origin;
    if (target[1] >= first[1]) {
        return target[1] === first[1] && target[0] > first[0] ? [first, target] : [target, first];
    }
    else if (target[1] > second[1] || (target[1] === second[1] && target[0] < second[0])) {
        return [first, target]
    }
    return origin;
}