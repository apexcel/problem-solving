// https://programmers.co.kr/learn/courses/30/lessons/17684?language=javascript

const solution = msg => {
    const map = new Map();
    const indices = [];
    for (let i = 1; i <= 26; i += 1) {
        map.set(String.fromCharCode((64 + i)), i);
    }
    let str = msg;
    let i = 1;
    while (str.length) {
        const current = str.slice(0, i);
        // console.log(str, current)
        if (!map.has(current)) {
            indices.push(map.get(str.slice(0, i -1)));
            map.set(current, map.size + 1);
            str = str.slice(i - 1)
            i = 1;
        }
        if (map.has(current) && str === current) {
            // console.log('!!', str, current)
            indices.push(map.get(str));
            break;
        }
        i += 1
    }

    // console.log(map)
    // console.log(indices)

    return indices;
};

(() => {
    [
        'KAKAO',
        'TOBEORNOTTOBEORTOBEORNOT',
        'ABABABABABABABAB'
    ].forEach(str => solution(str));
})();