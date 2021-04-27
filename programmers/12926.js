// https://programmers.co.kr/learn/courses/30/lessons/12926

const solution = (s, n) => {
    let str = '';
    for (let a of s) {
        str += a === ' ' ? ' ' : (() => {
            let C = a.charCodeAt();
            if (C <= 90 && C + n > 90 || C >= 97 && C + n > 122) C -= 26
            return String.fromCharCode(C+n);
        })();
    }
    return str;
};