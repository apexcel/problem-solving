// https://programmers.co.kr/learn/courses/30/lessons/12916

const solution = (s) => {
    let a = 0;
    s = s.toLowerCase().split('').forEach(v => {
        if (v === 'p') a++;
        if (v === 'y') a--;
    });
    return !a;
};

// better way

const solution = (s) => {
    return s.toUpperCase().split("P").length === s.toUpperCase().split("Y").length;
}