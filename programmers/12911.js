// https://programmers.co.kr/learn/courses/30/lessons/12911

const solution = n => {
    const bin = (n).toString(2).split('').filter(bit => bit === '1').length;
    let i = n;
    while (true) {
        i += 1;
        const next = (i).toString(2);
        const len = next.split('').filter(bit => bit === '1').length
        if (len === bin) {
            // console.log(i)
            return i;
        }
    }
};

solution(78)
solution(15)