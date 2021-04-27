// https://programmers.co.kr/learn/courses/30/lessons/64065

const solution = str => {
    str = str.slice(1, str.length - 1);

    let strings = [], temp = [], ans = [];
    let num = '', flag = false;

    for (const s of str) {
        if (s === '{') {
            temp = [];
            flag = true;
        }
        if (isNumeric(s)) {
            num += s;
        }
        if (flag) {
            if (s === ',') {
                temp.push(Number(num));
                num = '';
            }
            if (s === '}') {
                temp.push(Number(num));
                num = '';
                strings.push(temp);
                flag = false;
            }
        }
    }
    strings.sort((a, b) => a.length - b.length);
    strings.forEach(v => {
        v.forEach(e => {
            if (!ans.includes(e)) {
                ans.push(e)
            }
        });
    })
    console.log(ans)
    return ans;
};

const isNumeric = n => !isNaN(n - '0');

(() => {
    const tc = [
        ["{{2},{2,1},{2,1,3},{2,1,3,4}}", [2, 1, 3, 4]],
        ["{{1,2,3},{2,1},{1,2,4,3},{2}}", [2, 1, 3, 4]],
        ["{{20,111},{111}}", [111, 20]]
    ];

    // solution(tc[0][0])
    // solution(tc[1][0])
    solution(tc[2][0])
})();
