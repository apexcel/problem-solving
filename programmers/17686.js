// https://programmers.co.kr/learn/courses/30/lessons/17686

/**
 * 
 * 정규식을 이용해서 풀면 쉽게 풀 수 있다.
 * Head - Number - Misc. 형태이므로 숫자를 기준으로 split해서 풀 수도 있다.
 * 근데 정규식 잘 못 다루기때문에 그냥 스트링 하나하나에 대한 검사를 함.
 */

const solution = files => {
    files.sort((a, b) => {
        const A = parseHeadNumber(a),
        B = parseHeadNumber(b);
        if (A[0].toLowerCase() > B[0].toLowerCase()) {
            return 1;
        }
        else if (A[0].toLowerCase() < B[0].toLowerCase()) {
            return -1;
        }
        else {
            if (A[1] > B[1]) {
                return 1;
            }
            else if (A[1] < B[1]) {
                return -1;
            }
            else {
                return 0;
            }
        }
    })
    console.log(files)
    return files;
};

const parseHeadNumber = str => {
    let i = 0;
    let head = '', number = '';
    // 알파벳이거나 부호일 경우 head로 추가하고 처음으로
    // 숫자가 나오는 부분부터 이어서 숫자를 더한다.
    while (isAlpha(str[i]) || isMarker(str[i])) {
        head += str[i];
        i += 1;
    }
    while (isNumeric(str[i]) ) {
        number += str[i];
        i += 1;
    }

    // 0013 는 13으로 분류해야함.
    return [head, parseInt(number, 10)];
};

// 소문자로 변환시켜서 확인 할 것이기 때문에 해당 구간만 체크
const isAlpha = ch => {
    ch = ch.toLowerCase().charCodeAt(0);
    return ch >= 97 && ch <= 122;
};

/**
 * 
 * 알파벳이나 숫자 이외에 허용되는 부호들을 체크해야한다.
 * Head 부분에 영문자만 들어간다고 생각해서 계속 틀렸었다.
 * 즉, Head에는 abc-a도 가능하고 ab c.e 이런 것도 가능해서
 * 이 부분을 체크해줘야 했다.
 */
const isMarker = ch => {
    return (ch === ' ' || ch === '.' || ch === '-') ? true : false;
};

// 알파벳에서 '0' 빼기 연산을 하면 NaN이 나오고 숫자일 경우 값이 나옴.
const isNumeric = ch => !isNaN(ch - '0');


(() => {
    const testcase = [
        ["img12.png", "img10.png", "img02.png", "img1.png", "IMG01.GIF", "img2.JPG"],
        ["F-5 Freedom Fighter", "B-50 Superfortress", "A-10 Thunderbolt II", "F-14 Tomcat"],
        ["Ae1", "aA023", "Ab3", "aa21", "aa-a23", "aaa1", "aa2"],
    ];
    testcase.forEach(v => solution(v));
})()