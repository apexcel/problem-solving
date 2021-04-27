// https://programmers.co.kr/learn/courses/30/lessons/17677

const solution = (str1, str2) => {
    const t1 = tokenize(str1.toUpperCase()), t2 = tokenize(str2.toUpperCase());
    const [i, u] = filter(t1, t2);
    let j = i / u;
    return u === 0 ? 65536 : Math.floor(j * 65536);
};

const tokenize = str => {
    const len = str.length;
    let tokens = [];
    for (let i = 1; i < len; i += 1) {
        if (isAlpha(str[i-1]) && isAlpha(str[i])) {
            tokens.push(str[i-1] + str[i]);
        }
    }
    return tokens;
};

const isAlpha = char => {
    let c = char.charCodeAt(0);
    return c >= 65 && c <= 90;
};

const filter = (t1, t2) => {
    const s = new Set([...t1, ...t2]);
    let intersection = 0, union = 0;

    s.forEach(v => {
        const d1 = t1.filter(e => e === v).length
        const d2 = t2.filter(e => e === v).length
        union += Math.max(d1, d2);
        intersection += Math.min(d1, d2);
    })
    return [intersection, union];
}

console.log(filter([1,1,2,3,4], [1,2,2,3,5]))