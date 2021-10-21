/**
 * @param {string[]} table 
 * @param {string[]} languages 
 * @param {number[]} preference 
 * @returns 
 */
function solution(table, languages, preference) {
    const map = new Map();
    const res = [];

    table.forEach((str, i) => {
        const [name, ...langs] = str.split(' ');
        map.set(name, langs);
    });

    map.forEach((val, key) => res.push(
        [
            key,
            languages.reduce((acc, cur, i) => {
                const idx = val.findIndex(v => v === cur);
                acc += idx === -1 ? 0 : (5 - idx) * preference[i];
                return acc;
            }, 0)
        ]
    ));

    res.sort((a, b) => b[1] - a[1] || a[0].charCodeAt(0) - b[0].charCodeAt(0));
    return res[0][0];
}