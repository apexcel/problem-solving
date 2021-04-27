// https://programmers.co.kr/learn/courses/30/lessons/17687

/**
 * 
 * @param {*} n 진법
 * @param {*} t 미리 구할 숫자 개수
 * @param {*} m 게임에 참가하는 인원
 * @param {*} p 튜브의 순서
 */
const solution = (n, t, m, p) => {
    return converter(p, t, m, n).join('');
};

const converter = (p, t, m, radix) => {
    let radices = []; // 변환된 수들을 담을 배열
    let cheatSheet = []; // 반환 값을 담을 배열

    // 총 인원이 m명이고 t개의 숫자를 구해야 하므로
    // 0부터 m*t 까지 반복하면서
    for (let i = 0; i < t*m; i += 1) {
        // conv는 숫자 i를 해당 진법에 맞게 변환.
        // 소문자일 경우 대문자로 변환
        let conv = (i).toString(radix).toUpperCase();
        // 변환된 문자열을 char 하나씩 radices 배열에 담는다.
        for (let s of conv) {
            radices.push(s);
        }
    }

    // 숫자는 0부터 시작하고 순서는 1부터 시작하므로
    // 순서 - 1 부터 시작하여 뽑아야 할 만큼 뽑는다.
    // 이 때 총 인원 m만큼 지나야 다시 내 차례이므로 
    // 증감식은 내 순서 + 총 인원이 된다.
    for (let i = p-1; cheatSheet.length < t; i += m) {
        cheatSheet.push(radices[i]);
    }

    return cheatSheet;
};


const testcase = [
    [2, 4, 2, 1, "0111"],
    [16, 16, 2, 1, "02468ACE11111111"],
    [16, 16, 2, 2, "13579BDF01234567"]
];

testcase.forEach(v => {
    [n, t, m, p, ans] = v;
    console.log(ans === solution(n, t, m, p) ? 'Pass' : 'Fail');
});