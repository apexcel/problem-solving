// https://programmers.co.kr/learn/courses/30/lessons/42746

/*
    비교 방법
    1) a + b 문자열과 b + a 문자열 중 더 큰 것 고르기
    2) 1000이하의 정수 이므로 최대 3자리이기 때문에
        12의 경우 1212로 121의 경우 1211로 4자리로 만들어 비교하면된다.
*/

const solution = numbers => {
    if (numbers.reduce((acc, cur) => acc + cur) === 0) return '0';

    let str = '';

    numbers.map(v => '' + v).sort((a, b) => {
        const ab = Number(a + b), ba = Number(b + a);
        return ab > ba ? -1 : 1;
    }).forEach(v => str += v);
    return str;
};

console.log(solution([40, 403]))
console.log(solution([3, 30, 34, 5, 9]))
//console.log(solution([0, 0, 0, 0]))