// https://programmers.co.kr/learn/courses/30/lessons/60058

const isCorrect = p => {
    let top = 0;
    for (const v of p) {
        top += (v === '(') ? 1 : -1;
        if (top < 0) return false;
    }
    return true;
};

const slicing = w => {
    let left = 0, right = 0;
    for (let i = 0; i <= w.length; i += 1) {
        if (left > 0 && right > 0 && left === right) {
            return [w.slice(0, i), w.slice(i).length ? w.slice(i) : ''];
        }
        w[i] === '(' ? left += 1 : right += 1;
    }
};

const solution = w => {
    if (w === '') return '';
    const [u, v] = slicing(w);
    if (isCorrect(u)) {
        return u + solution(v);
    }
    else {
        let temp = `(${solution(v)})`;
        let d = u.slice(1, u.length-1);
        let end = ''
        if (d) {
            for (let i = 0; i < d.length; i += 1) {
                end += d[i] === `(` ? `)` : `(`;
            }
        }
        temp += end
        return temp;
    }
}

console.log(solution(`(()())()`))
console.log(solution(`()))((()`))
console.log(solution(`)(`))